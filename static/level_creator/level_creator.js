let attackCount;

initializeLevelCreator();

/**
 * Adds a select element to an arrow.
 * @param arrow The arrow div the select element is being added to
 * @param arrowDirection The direction of the initial selection
 */
function addDirectionSelection(arrow, arrowDirection) {
    const direction = document.createElement('label');
    direction.textContent = 'Direction: ';
    direction.classList.add('direction-label');
    arrow.append(direction);
    
    const array = ['←', '→', '↑', '↓', '?'];
    
    const selectList = document.createElement('select');
    selectList.classList.add('direction-select');
    selectList.setAttribute('onchange', 'updateDirectionSelection(this)');
    arrow.appendChild(selectList);
    
    for(let i = 0; i < array.length; i++) {
        const option = document.createElement('option');
        option.value = array[i];
        option.text = array[i];
        if(array[i] === arrowDirection) {
            option.setAttribute('selected', 'selected');
        }
        selectList.appendChild(option);
    }
}

/**
 * Adds an input element to an arrow for delay.
 * @param arrow The arrow div the input is being added to
 * @param delayTime The delay value
 */
function addArrowDelayInput(arrow, delayTime) {
    const delay = document.createElement('label');
    delay.textContent = 'Delay: ';
    arrow.append(delay);
    
    const delayTimeInput = document.createElement('input');
    delayTimeInput.type = 'numeric';
    delayTimeInput.value = delayTime;
    delayTimeInput.classList.add('delay-time-input');
    delayTimeInput.setAttribute('pattern', '[0-9]*');
    delayTimeInput.setAttribute('oninput', 'filterCharactersAndUpdateJson(this, 4)');
    arrow.append(delayTimeInput);
}

/**
 * Adds an input element to an arrow for speed.
 * @param arrow The arrow div the input is being added to
 * @param speedValue The speed value
 */
function addArrowSpeedInput(arrow, speedValue) {
    const speed = document.createElement('label');
    speed.textContent = 'Speed: ';
    arrow.append(speed);
    
    const numberInputSpeed = document.createElement('input');
    numberInputSpeed.type = 'numeric';
    numberInputSpeed.value = speedValue;
    numberInputSpeed.classList.add('speed-input');
    numberInputSpeed.setAttribute('pattern', '[0-9]*');
    numberInputSpeed.setAttribute('oninput', 'filterCharactersAndUpdateJson(this, 3)');
    arrow.append(numberInputSpeed);
}

/**
 * Adds a checkbox element to an arrow for reverse.
 * @param arrow The arrow div the checkbox is being added to
 * @param reversed checkbox checked status
 */
function addArrowReverseCheckBox(arrow, reversed) {
    const reverse = document.createElement('label');
    reverse.textContent = 'Reverse: ';
    reverse.classList.add('reverse-label');
    arrow.append(reverse);
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = 'value';
    checkbox.classList.add('reverse-checkbox');
    checkbox.setAttribute('onclick', 'updateReverseCheckBox(this)');
    if(reversed) {
        checkbox.checked = true;
    }
    arrow.appendChild(checkbox);
}

/**
 * Adds a delete button to an arrow.
 * @param arrow The arrow div the button is being added to
 */
function addArrowDeleteButton(arrow) {
    const deleteArrow = document.createElement('button');
    deleteArrow.setAttribute('onClick', 'deleteArrow(this)');
    deleteArrow.setAttribute('class', 'delete-arrow-button');
    deleteArrow.className += ' ui-button';
    deleteArrow.textContent = 'Delete';
    arrow.append(deleteArrow);
}

/**
 * Adds an arrow to an attack.
 * @param button The add arrow button associated with the arrow's attack
 * @param arrowDirection Direction of the arrow
 * @param delayTime The delay value
 * @param speedValue the speed value
 * @param reversed Whether or not arrow is reversed
 * @param fromJson Whether or not the arrow is being created from loading an existing level
 */
function addArrow(
    button, arrowDirection = 'R', delayTime = '600', speedValue = '100', reversed = false, fromJson = false) {
    if(button.parentNode.children.length > 50) {
        alert('Maximum number of arrows reached in this attack');
        return;
    }
    if(!fromJson) {
        const attackIndex = getAttackIndexFromAttackElement(button);
        levelJson['attacks'][attackIndex]['arrows'].push({
            'direction': arrowDirection, 'reversed': reversed, 'delay': delayTime, 'speed': speedValue
        });
    }
    
    const arrow = document.createElement('div');
    arrow.setAttribute('class', 'arrow-container');
    $(arrow).insertBefore(button);
    
    addDirectionSelection(arrow, getArrowSymbol(arrowDirection));
    addArrowDelayInput(arrow, delayTime);
    addArrowSpeedInput(arrow, speedValue);
    addArrowReverseCheckBox(arrow, reversed);
    addArrowDeleteButton(arrow);
}

/**
 * Deletes an arrow.
 * @param deleteArrowButton The delete button that belongs to the arrow
 */
function deleteArrow(deleteArrowButton) {
    const indices = getAttackAndArrowIndicesFromArrowElement(deleteArrowButton);
    levelJson['attacks'][indices[0]]['arrows'].splice(indices[1], 1);
    deleteArrowButton.parentNode.remove();
}

/**
 * Deletes an attack.
 * @param deleteAttackButton The delete button that belongs to the attack
 */
function deleteAttack(deleteAttackButton) {
    const attack = deleteAttackButton.parentNode.parentNode;
    const deletedAttack = getAttackIndexFromAttackElement(deleteAttackButton);
    levelJson['attacks'].splice(deletedAttack, 1);
    attack.remove();
    attackCount--;
    // Forward renumbering
    $('.attackTitle').each(function() {
        const id = this.textContent.slice(7);
        if(id > deletedAttack) {
            this.textContent = 'Attack ' + (id - 1);
        }
    });
}

/**
 * Performs toggling of the random CW shift button.
 * @param randomCWShiftButton The random CW shift button
 */
function randomClockwiseShift(randomCWShiftButton) {
    const attackIndex = getAttackIndexFromAttackElement(randomCWShiftButton);
    if(randomCWShiftButton.classList.contains('random-clockwise-shift-off')) {
        randomCWShiftButton.classList.remove('random-clockwise-shift-off');
        randomCWShiftButton.classList.add('random-clockwise-shift-on');
        levelJson['attacks'][attackIndex]['clockwiseShift'] = true;
    }
    else {
        randomCWShiftButton.classList.remove('random-clockwise-shift-on');
        randomCWShiftButton.classList.add('random-clockwise-shift-off');
        levelJson['attacks'][attackIndex]['clockwiseShift'] = false;
    }
}

/**
 * Toggles visibility of attack body when clicking toggle button.
 * @param toggleButton The toggle button
 */
function toggleVisibility(toggleButton) {
    const body = toggleButton.parentNode.nextSibling;
    if(body.style.display === 'none') {
        body.style.display = 'block';
        toggleButton.textContent = 'Hide';
    }
    else {
        body.style.display = 'none';
        toggleButton.textContent = 'Open';
    }
}

/**
 * Adds the visibility toggle button to an Attack.
 * @param attackTitleContainer The attack div the button is added to
 */
function addToggleVisibilityButton(attackTitleContainer) {
    const toggleVisibility = document.createElement('button');
    toggleVisibility.setAttribute('onClick', 'toggleVisibility(this)');
    toggleVisibility.classList.add('toggle-visibility', 'ui-button');
    toggleVisibility.textContent = 'Hide';
    attackTitleContainer.append(toggleVisibility);
}

/**
 * Adds a h2 title to an attack.
 * @param attackTitleContainer The attack div the title is added to
 */
function addAttackTitle(attackTitleContainer) {
    const h2 = document.createElement('h1');
    h2.setAttribute('class', 'attack-title');
    h2.textContent = 'Attack ' + attackCount;
    attackTitleContainer.append(h2);
}

/**
 * Adds a random CW shift button to an attack.
 * @param attackTitleContainer The attack div the title is added to.
 * @param randomClockwiseShift The initial state of the button (on or off)
 */
function addRandomCWShiftButton(attackTitleContainer, randomClockwiseShift) {
    const randomClockwiseShiftButton = document.createElement('button');
    randomClockwiseShiftButton.setAttribute('onClick', 'randomClockwiseShift(this)');
    let randomClockwiseShiftClass = 'random-clockwise-shift-off';
    if(randomClockwiseShift) {
        randomClockwiseShiftClass = 'random-clockwise-shift-on';
    }
    randomClockwiseShiftButton.classList.add(randomClockwiseShiftClass, 'ui-button');
    randomClockwiseShiftButton.textContent = 'Random CW Shift';
    attackTitleContainer.append(randomClockwiseShiftButton);
}

/**
 * Adds an input element to an attack for delay.
 * @param attackTitleContainer The attack div the input is being added to
 * @param attackDelay The delay value
 */
function addAttackDelayInput(attackTitleContainer, attackDelay) {
    const delay = document.createElement('label');
    delay.textContent = 'Delay: ';
    delay.classList.add('attack-delay-label');
    attackTitleContainer.append(delay);
    
    const delayTimeInput = document.createElement('input');
    delayTimeInput.type = 'numeric';
    delayTimeInput.value = attackDelay;
    delayTimeInput.classList.add('attack-delay-time-input');
    delayTimeInput.setAttribute('pattern', '[0-9]*');
    delayTimeInput.setAttribute('oninput', 'filterCharactersAndUpdateJson(this, 4)');
    attackTitleContainer.append(delayTimeInput);
}

/**
 * Adds a delete button for an attack.
 * @param attackTitleContainer The div the button is added to
 */
function addDeleteAttackButton(attackTitleContainer) {
    const deleteAttack = document.createElement('button');
    deleteAttack.setAttribute('onClick', 'deleteAttack(this)');
    deleteAttack.classList.add('delete-attack-button', 'ui-button');
    deleteAttack.textContent = 'Delete';
    attackTitleContainer.append(deleteAttack);
}

/**
 * Adds an add arrow button to an attack and returns the button.
 * @param attackBodyContainer The div the arrow is added to
 * @returns {HTMLButtonElement} The add arrow button
 */
function addAddArrowButton(attackBodyContainer) {
    const addArrowButton = document.createElement('button');
    addArrowButton.setAttribute('onClick', 'addArrow(this)');
    addArrowButton.classList.add('add-arrow-button', 'ui-button');
    addArrowButton.textContent = 'Add Arrow';
    attackBodyContainer.append(addArrowButton);
    return addArrowButton;
}

/**
 * Adds an attack.
 * @param randomClockwiseShift The initial state of the random CW shift button
 * @param attackDelay The delay value
 * @param fromJson  Whether or not the attack is being created from loading an existing level
 * @returns {HTMLButtonElement|null} The attack's add arrow button after an attack is added and returns null of limit
 *     was reached
 */
function addAttack(randomClockwiseShift = false, attackDelay = '10', fromJson = false) {
    if(attackCount >= 40) {
        alert('Maximum number of attacks reached');
        return null;
    }
    attackCount++;
    if(!fromJson) {
        levelJson['attacks'].push({'clockwiseShift': randomClockwiseShift, 'attackDelay': attackDelay, 'arrows': []});
    }
    const attack = document.createElement('div');
    attack.setAttribute('class', 'attack');
    
    const attackTitleContainer = document.createElement('div');
    attackTitleContainer.setAttribute('class', 'attack-title-container');
    
    const attackBodyContainer = document.createElement('div');
    attackBodyContainer.setAttribute('class', 'attack-body-container');
    
    addToggleVisibilityButton(attackTitleContainer);
    addAttackTitle(attackTitleContainer);
    addRandomCWShiftButton(attackTitleContainer, randomClockwiseShift);
    addAttackDelayInput(attackTitleContainer, attackDelay);
    addDeleteAttackButton(attackTitleContainer);
    attack.append(attackTitleContainer);
    attack.append(attackBodyContainer);
    const addArrowButton = addAddArrowButton(attackBodyContainer);
    
    $('.attacks').append(attack);
    return addArrowButton;
}

/**
 * Filters out non-numeric characters and constrains length
 * @param input the input element
 * @param max the max length
 */
function filterCharactersAndUpdateJson(input, max) {
    limitCharacters(input, max);
    input.value = input.value.replace(/\D/g, '');
    input.value = Math.round(input.value);
    
    const inputType = input.className;
    switch(inputType) {
        case 'attack-delay-time-input':
            updateAttackDelay(input);
            break;
        case 'delay-time-input':
            updateArrowDelay(input);
            break;
        case 'speed-input':
            updateSpeed(input);
    }
}

/**
 * Limits string length to a max.
 * @param input The input element
 * @param max The max length
 */
function limitCharacters(input, max) {
    if(input.value.length > max) {
        input.value = input.value.substring(0, input.value.length - 1);
    }
}

/**
 * Updates an attack's delay input value in json
 * @param input the input element
 */
function updateAttackDelay(input) {
    const attackIndex = getAttackIndexFromAttackElement(input);
    levelJson['attacks'][attackIndex]['attackDelay'] = input.value;
}

/**
 * Updates an arrow's delay input value in json
 * @param input the input element
 */
function updateArrowDelay(input) {
    const indices = getAttackAndArrowIndicesFromArrowElement(input);
    levelJson['attacks'][indices[0]]['arrows'][indices[1]]['delay'] = input.value;
}

/**
 * Updates an arrow's speed input value in json
 * @param input the input element
 */
function updateSpeed(input) {
    const indices = getAttackAndArrowIndicesFromArrowElement(input);
    levelJson['attacks'][indices[0]]['arrows'][indices[1]]['speed'] = input.value;
}

/**
 * Updates an arrow's reverse checkbox value in json
 * @param checkbox the checkbox
 */
function updateReverseCheckBox(checkbox) {
    const indices = getAttackAndArrowIndicesFromArrowElement(checkbox);
    levelJson['attacks'][indices[0]]['arrows'][indices[1]]['reversed'] = checkbox.checked;
}

/**
 * Updates an arrow's direction selection's value in json
 * @param selection the direction selection element
 */
function updateDirectionSelection(selection) {
    const indices = getAttackAndArrowIndicesFromArrowElement(selection);
    levelJson['attacks'][indices[0]]['arrows'][indices[1]]['direction'] = getArrowLetter(selection.value);
}

/**
 * Given an element inside an arrow, returns the attack number and arrow number.
 * @param arrowElement An element inside an arrow
 * @returns {number[]} Attack index and arrow index
 */
function getAttackAndArrowIndicesFromArrowElement(arrowElement) {
    const child = arrowElement.parentNode;
    const parent = child.parentNode;
    const arrowIndex = Array.prototype.indexOf.call(parent.children, child);
    const attackIndex = Array.prototype.indexOf.call(parent.parentNode.parentNode.children, parent.parentNode);
    return [attackIndex, arrowIndex];
}

/**
 *  Given an element inside an attack, returns the attack number.
 * @param attackElement An element inside an attack
 * @returns {number} Index of the attack
 */
function getAttackIndexFromAttackElement(attackElement) {
    const attack = attackElement.parentNode.parentNode;
    const attacksContainer = attack.parentNode;
    return Array.prototype.indexOf.call(attacksContainer.children, attack);
}

/**
 *  Adds an input element for level title.
 * @param attackCreatorHeading The div the input is added to.
 */
function addHeaderTitleInput(attackCreatorHeading) {
    const title = document.createElement('label');
    title.textContent = 'Title: ';
    title.classList.add('header-label');
    attackCreatorHeading.append(title);
    
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.value = 'Untitled';
    titleInput.id = 'title-input';
    titleInput.setAttribute('oninput', 'limitCharacters(this, 20)');
    attackCreatorHeading.append(titleInput);
}

/**
 * Adds a textarea element for the level description.
 * @param attackCreatorHeading The div the textarea is added to
 */
function addHeaderDescriptionInput(attackCreatorHeading) {
    const description = document.createElement('label');
    description.textContent = 'Description: ';
    description.classList.add('header-label');
    attackCreatorHeading.append(description);
    
    const descriptionInput = document.createElement('textarea');
    descriptionInput.type = 'text';
    descriptionInput.value = 'Add description';
    descriptionInput.id = 'description-input';
    descriptionInput.setAttribute('oninput', 'limitCharacters(this, 200)');
    attackCreatorHeading.append(descriptionInput);
}

/**
 * Adds a selection element to header.
 * @param diffAndVisibilityDiv The div the selection is added to
 */
function addHeaderDifficultySelection(diffAndVisibilityDiv) {
    const difficulty = document.createElement('label');
    difficulty.textContent = 'Difficulty: ';
    difficulty.classList.add('header-label');
    diffAndVisibilityDiv.append(difficulty);
    
    const array = ['easy', 'medium', 'hard'];
    
    const selectList = document.createElement('select');
    selectList.classList.add('direction-select', 'diffSelect');
    selectList.id = 'difficulty';
    diffAndVisibilityDiv.appendChild(selectList);
    
    for(let i = 0; i < array.length; i++) {
        const option = document.createElement('option');
        option.value = array[i];
        option.text = array[i];
        selectList.appendChild(option);
    }
}

/**
 * Adds level visibility checkbox to header.
 * @param diffAndVisibilityDiv The div the checkbox is added to
 */
function addHeaderVisibilityCheckBox(diffAndVisibilityDiv) {
    const isPublic = document.createElement('label');
    isPublic.textContent = 'Public: ';
    isPublic.classList.add('header-label');
    diffAndVisibilityDiv.append(isPublic);
    
    const isPublicCheckbox = document.createElement('input');
    isPublicCheckbox.type = 'checkbox';
    isPublicCheckbox.value = 'value';
    isPublicCheckbox.id = 'is-public-checkbox';
    diffAndVisibilityDiv.appendChild(isPublicCheckbox);
}

/**
 *  Adds save button to header.
 * @param attackCreatorHeading The header div
 */
function addHeaderLevelSaveButton(attackCreatorHeading) {
    const saveButton = document.createElement('button');
    saveButton.classList.add('save-level-button');
    saveButton.textContent = 'Save Level';
    attackCreatorHeading.append(saveButton);
}

/**
 * Creates UI for header
 */
function createHeaderElements() {
    const attackCreatorHeading = document.createElement('div');
    attackCreatorHeading.classList.add('attack-creator-heading');
    
    const heading = document.createElement('h1');
    heading.textContent = 'Level Creator';
    
    addHeaderTitleInput(attackCreatorHeading);
    addHeaderDescriptionInput(attackCreatorHeading);
    
    const diffAndVisibilityDiv = document.createElement('div');
    diffAndVisibilityDiv.id = 'diff-and-visibility-div';
    attackCreatorHeading.append(diffAndVisibilityDiv);
    
    addHeaderDifficultySelection(diffAndVisibilityDiv);
    addHeaderVisibilityCheckBox(diffAndVisibilityDiv);
    addHeaderLevelSaveButton(attackCreatorHeading);
    
    document.body.insertBefore(attackCreatorHeading, document.body.firstChild);
    document.body.insertBefore(heading, document.body.firstChild);
    
    $('.save-level-button').click(save);
}

/**
 * Creates header UI and populates level creator.
 */
function initializeLevelCreator() {
    attackCount = 0;
    createHeaderElements();
    populateLevelCreator();
}

/**
 * Populates level creator UI with data from json.
 */
function populateLevelCreator() {
    document.getElementById('title-input').value = levelJson['title'];
    document.getElementById('description-input').value = levelJson['description'];
    document.getElementById('difficulty').value = levelJson['difficulty'];
    document.getElementById('is-public-checkbox').checked = levelJson['isPublic'];
    
    for(let i = 0; i < levelJson["attacks"].length; i++) {
        const attack = levelJson['attacks'][i];
        const arrows = attack['arrows'];
        const addArrowButton = addAttack(attack['clockwiseShift'], attack['attackDelay'], true);
        for(let j = 0; j < arrows.length; j++) {
            const arrow = arrows[j];
            addArrow(addArrowButton, arrow['direction'], arrow['delay'], arrow['speed'], arrow['reversed'], true);
        }
    }
}

/**
 * Sets whether the save button's enabled/disabled state
 * @param enabled True if the save button should be enabled
 */
function setSaveEnabled(enabled) {
    const saveButton = $('.save-level-button');
    if(enabled) {
        saveButton.click(save);
        saveButton.prop('disabled', false);
        saveButton.css('background-color', '#74400D');
        saveButton.css('color', '#FB7F03');
    }
    else {
        saveButton.off('click');
        saveButton.prop('disabled', true);
        saveButton.css('background-color', '#494949');
        saveButton.css('color', '#969696');
    }
}

/**
 * Sends level information to server.
 */
function save() {
    setSaveEnabled(false);
    const tempJson = levelJson;
    tempJson['title'] = document.getElementById('title-input').value;
    tempJson['description'] = document.getElementById('description-input').value;
    tempJson['difficulty'] = document.getElementById('difficulty').value;
    tempJson['isPublic'] = document.getElementById('is-public-checkbox').checked;
    if(isNewLevel) {
        $.ajax({
            type: 'POST',
            url: addLevelUrl,
            contentType: 'application/json',
            data: JSON.stringify(tempJson),
            dataType: 'json',
            success: function(response) {
                const message = response['response'];
                alert(message);
                if(message === 'Saved!') {
                    isNewLevel = false;
                    window.location.href = response['level_url'];
                }
                setSaveEnabled(true);
            },
            error: function() {
                alert('Unable to save new level');
                setSaveEnabled(true);
            }
        });
    }
    else {
        $.ajax({
            type: 'PATCH',
            url: updateLevelUrl,
            contentType: 'application/json',
            data: JSON.stringify(tempJson),
            dataType: 'json',
            success: function(response) {
                const message = response['response'];
                alert(message);
                setSaveEnabled(true);
            },
            error: function() {
                alert('Unable to save level');
                setSaveEnabled(true);
            }
        });
    }
    
}

/**
 * Given a character representation returns the arrow symbol.
 * @param direction Character representation of a direction
 * @returns {string|null} The arrow symbol
 */
function getArrowSymbol(direction) {
    switch(direction) {
        case 'D':
            return '↑';
        case 'U':
            return '↓';
        case 'R':
            return '←';
        case 'L':
            return '→';
        case '?':
            return '?';
    }
    return null;
}

/**
 * Given an arrow symbol returns the character representation.
 * @param direction The arrow symbol
 * @returns {string|null} The character representation
 */
function getArrowLetter(direction) {
    switch(direction) {
        case '↑':
            return 'D';
        case '↓':
            return 'U';
        case '←':
            return 'R';
        case '→':
            return 'L';
        case '?':
            return '?';
    }
    return null;
}
