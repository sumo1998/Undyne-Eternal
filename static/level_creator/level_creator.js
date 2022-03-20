let attackCount;

initializeLevelCreator();

function addDirectionSelection(arrow, arrowDirection) {
    let direction = document.createElement("label");
    direction.textContent = "Direction: ";
    direction.classList.add("directionLabel");
    arrow.append(direction);
    
    let array = ["←", "→", "↑", "↓", "?"];
    
    let selectList = document.createElement("select");
    selectList.classList.add("directionSelect");
    selectList.setAttribute("onchange", "updateDirectionSelection(this)");
    arrow.appendChild(selectList);
    
    for(let i = 0; i < array.length; i++) {
        let option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];
        if(array[i] === arrowDirection) {
            option.setAttribute("selected", "selected");
        }
        selectList.appendChild(option);
    }
}

function addArrowDelayInput(arrow, delayTime) {
    let delay = document.createElement("label");
    delay.textContent = "Delay: ";
    arrow.append(delay);
    
    let delayTimeInput = document.createElement("input");
    delayTimeInput.type = "numeric";
    delayTimeInput.value = delayTime;
    delayTimeInput.classList.add("delayTimeInput");
    delayTimeInput.setAttribute("pattern", "[0-9]*");
    delayTimeInput.setAttribute("oninput", "filterCharactersAndUpdateJson(this, 4)");
    arrow.append(delayTimeInput);
}

function addArrowSpeedInput(arrow, speedValue) {
    let speed = document.createElement("label");
    speed.textContent = "Speed: ";
    arrow.append(speed);
    
    let numberInputSpeed = document.createElement("input");
    numberInputSpeed.type = "numeric";
    numberInputSpeed.value = speedValue;
    numberInputSpeed.classList.add("speedInput");
    numberInputSpeed.setAttribute("pattern", "[0-9]*");
    numberInputSpeed.setAttribute("oninput", "filterCharactersAndUpdateJson(this, 3)");
    arrow.append(numberInputSpeed);
}

function addArrowReverseCheckBox(arrow, reversed) {
    let reverse = document.createElement("label");
    reverse.textContent = "Reverse: ";
    reverse.classList.add("reverseLabel");
    arrow.append(reverse);
    
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = "value";
    checkbox.classList.add("reverseCheckBox");
    checkbox.setAttribute("onclick", "updateReverseCheckBox(this)");
    if(reversed) {
        checkbox.checked = true;
    }
    arrow.appendChild(checkbox);
}

function addArrowDeleteButton(arrow) {
    let deleteArrow = document.createElement("button");
    deleteArrow.setAttribute("onClick", "deleteArrow(this)");
    deleteArrow.setAttribute("class", "deleteArrowButton");
    deleteArrow.className += " uiButton";
    deleteArrow.textContent = "Delete";
    arrow.append(deleteArrow);
}

function addArrow(
    button, arrowDirection = "R", delayTime = "10", speedValue = "30", reversed = false, fromJson = false) {
    if(button.parentNode.children.length > 50) {
        alert("Maximum number of arrows reached in this attack");
        return;
    }
    if(!fromJson) {
        let attackIndex = getAttackIndexFromAttackTitleElement(button);
        levelJson["attacks"][attackIndex]["arrows"].push({
            "direction": arrowDirection, "reversed": reversed, "delay": delayTime, "speed": speedValue
        });
    }
    
    let arrow = document.createElement("div");
    arrow.setAttribute("class", "arrowContainer");
    $(arrow).insertBefore(button);
    
    addDirectionSelection(arrow, getArrowSymbol(arrowDirection));
    addArrowDelayInput(arrow, delayTime);
    addArrowSpeedInput(arrow, speedValue);
    addArrowReverseCheckBox(arrow, reversed);
    addArrowDeleteButton(arrow);
}

function deleteArrow(deleteArrowButton) {
    let indices = getAttackAndArrowIndicesFromArrowElement(deleteArrowButton);
    levelJson["attacks"][indices[0]]["arrows"].splice(indices[1], 1);
    deleteArrowButton.parentNode.remove();
}

function deleteAttack(deleteAttackButton) {
    let attack = deleteAttackButton.parentNode.parentNode;
    let deletedAttack = getAttackIndexFromAttackTitleElement(deleteAttackButton);
    levelJson["attacks"].splice(deletedAttack, 1);
    attack.remove();
    attackCount--;
    // Forward renumbering
    $(".attackTitle").each(function() {
        let id = this.textContent.slice(7);
        if(id > deletedAttack) {
            this.textContent = "Attack " + (id - 1);
        }
    });
}

function randomClockwiseShift(randomCWShiftButton) {
    let attackIndex = getAttackIndexFromAttackTitleElement(randomCWShiftButton);
    if(randomCWShiftButton.classList.contains("randomClockwiseShiftOff")) {
        randomCWShiftButton.classList.remove("randomClockwiseShiftOff");
        randomCWShiftButton.classList.add("randomClockwiseShiftOn");
        levelJson["attacks"][attackIndex]["clockwiseShift"] = true;
    }
    else {
        randomCWShiftButton.classList.remove("randomClockwiseShiftOn");
        randomCWShiftButton.classList.add("randomClockwiseShiftOff");
        levelJson["attacks"][attackIndex]["clockwiseShift"] = false;
    }
}

function toggleVisibility(toggleButton) {
    let body = toggleButton.parentNode.nextSibling;
    if(body.style.display === "none") {
        body.style.display = "block";
        toggleButton.textContent = "Hide";
    }
    else {
        body.style.display = "none";
        toggleButton.textContent = "Open";
    }
}

function addToggleVisibilityButton(attackTitleContainer) {
    let toggleVisibility = document.createElement("button");
    toggleVisibility.setAttribute("onClick", "toggleVisibility(this)");
    toggleVisibility.classList.add("toggleVisibility", "uiButton");
    toggleVisibility.textContent = "Hide";
    attackTitleContainer.append(toggleVisibility);
}

function addAttackTitle(attackTitleContainer) {
    let h2 = document.createElement("h1");
    h2.setAttribute("class", "attackTitle");
    h2.textContent = "Attack " + attackCount;
    attackTitleContainer.append(h2);
}

function addRandomCWShiftButton(attackTitleContainer) {
    let randomClockwiseShiftButton = document.createElement("button");
    randomClockwiseShiftButton.setAttribute("onClick", "randomClockwiseShift(this)");
    let randomClockwiseShiftClass = "randomClockwiseShiftOff";
    if(randomClockwiseShift) {
        randomClockwiseShiftClass = "randomClockwiseShiftOn";
    }
    randomClockwiseShiftButton.classList.add(randomClockwiseShiftClass, "uiButton");
    randomClockwiseShiftButton.textContent = "Random CW Shift";
    attackTitleContainer.append(randomClockwiseShiftButton);
}

function addAttackDelayInput(attackTitleContainer, attackDelay) {
    let delay = document.createElement("label");
    delay.textContent = "Delay: ";
    delay.classList.add("attackDelayLabel");
    attackTitleContainer.append(delay);
    
    let delayTimeInput = document.createElement("input");
    delayTimeInput.type = "numeric";
    delayTimeInput.value = attackDelay;
    delayTimeInput.classList.add("attackDelayTimeInput");
    delayTimeInput.setAttribute("pattern", "[0-9]*");
    delayTimeInput.setAttribute("oninput", "filterCharactersAndUpdateJson(this, 4)");
    attackTitleContainer.append(delayTimeInput);
}

function addDeleteAttackButton(attackTitleContainer) {
    let deleteAttack = document.createElement("button");
    deleteAttack.setAttribute("onClick", "deleteAttack(this)");
    deleteAttack.classList.add("deleteAttackButton", "uiButton");
    deleteAttack.textContent = "Delete";
    attackTitleContainer.append(deleteAttack);
}

function addAddArrowButton(attackBodyContainer) {
    let addArrowButton = document.createElement("button");
    addArrowButton.setAttribute("onClick", "addArrow(this)");
    addArrowButton.classList.add("addArrowButton", "uiButton");
    addArrowButton.textContent = "Add Arrow";
    attackBodyContainer.append(addArrowButton);
    return addArrowButton;
}

function addAttack(randomClockwiseShift = false, attackDelay = "10", fromJson = false) {
    if(attackCount >= 40) {
        alert("Maximum number of attacks reached");
        return null;
    }
    attackCount++;
    if(!fromJson) {
        levelJson["attacks"].push({"clockwiseShift": randomClockwiseShift, "attackDelay": attackDelay, "arrows": []});
    }
    const attack = document.createElement("div");
    attack.setAttribute("class", "attack");
    
    const attackTitleContainer = document.createElement("div");
    attackTitleContainer.setAttribute("class", "attackTitleContainer");
    
    let attackBodyContainer = document.createElement("div");
    attackBodyContainer.setAttribute("class", "attackBodyContainer");
    
    addToggleVisibilityButton(attackTitleContainer);
    addAttackTitle(attackTitleContainer);
    addRandomCWShiftButton(attackTitleContainer);
    addAttackDelayInput(attackTitleContainer, attackDelay);
    addDeleteAttackButton(attackTitleContainer);
    attack.append(attackTitleContainer);
    attack.append(attackBodyContainer);
    let addArrowButton = addAddArrowButton(attackBodyContainer);
    
    $(".attacks").append(attack);
    return addArrowButton;
}

function filterCharactersAndUpdateJson(input, max) {
    limitCharacters(input, max);
    input.value = input.value.replace(/\D/g, "");
    input.value = Math.round(input.value);
    
    let inputType = input.className;
    switch(inputType) {
        case "attackDelayTimeInput":
            updateAttackDelay(input);
            break;
        case "delayTimeInput":
            updateArrowDelay(input);
            break;
        case "speedInput":
            updateSpeed(input);
    }
}

function limitCharacters(input, max) {
    if(input.value.length > max) {
        input.value = input.value.substring(0, input.value.length - 1);
    }
}

function updateAttackDelay(input) {
    let attackIndex = getAttackIndexFromAttackTitleElement(input);
    levelJson["attacks"][attackIndex]["attackDelay"] = input.value;
}

function updateArrowDelay(input) {
    let indices = getAttackAndArrowIndicesFromArrowElement(input);
    levelJson["attacks"][indices[0]]["arrows"][indices[1]]["delay"] = input.value;
}

function updateSpeed(input) {
    let indices = getAttackAndArrowIndicesFromArrowElement(input);
    levelJson["attacks"][indices[0]]["arrows"][indices[1]]["speed"] = input.value;
}

function updateReverseCheckBox(checkbox) {
    let indices = getAttackAndArrowIndicesFromArrowElement(checkbox);
    levelJson["attacks"][indices[0]]["arrows"][indices[1]]["reversed"] = checkbox.checked;
}

function updateDirectionSelection(selection) {
    let indices = getAttackAndArrowIndicesFromArrowElement(selection);
    levelJson["attacks"][indices[0]]["arrows"][indices[1]]["direction"] = getArrowLetter(selection.value);
}

function getAttackAndArrowIndicesFromArrowElement(arrowElement) {
    let child = arrowElement.parentNode;
    let parent = child.parentNode;
    let arrowIndex = Array.prototype.indexOf.call(parent.children, child);
    let attackIndex = Array.prototype.indexOf.call(parent.parentNode.parentNode.children, parent.parentNode);
    return [attackIndex, arrowIndex];
}

function getAttackIndexFromAttackTitleElement(attackTitleElement) {
    let attack = attackTitleElement.parentNode.parentNode;
    let attacksContainer = attack.parentNode;
    return Array.prototype.indexOf.call(attacksContainer.children, attack);
}

function addHeaderTitleInput(attackCreatorHeading) {
    let title = document.createElement("label");
    title.textContent = "Title: ";
    title.classList.add("headerLabel");
    attackCreatorHeading.append(title);
    
    let titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.value = "Untitled";
    titleInput.id = "titleInput";
    titleInput.setAttribute("oninput", "limitCharacters(this, 20)");
    attackCreatorHeading.append(titleInput);
}

function addHeaderDescriptionInput(attackCreatorHeading) {
    let description = document.createElement("label");
    description.textContent = "Description: ";
    description.classList.add("headerLabel");
    attackCreatorHeading.append(description);
    
    let descriptionInput = document.createElement("textarea");
    descriptionInput.type = "text";
    descriptionInput.value = "Add description";
    descriptionInput.id = "descriptionInput";
    descriptionInput.setAttribute("oninput", "limitCharacters(this, 200)");
    attackCreatorHeading.append(descriptionInput);
}

function addHeaderDifficultySelection(diffAndVisibilityDiv) {
    let difficulty = document.createElement("label");
    difficulty.textContent = "Difficulty: ";
    difficulty.classList.add("headerLabel");
    diffAndVisibilityDiv.append(difficulty);
    
    let array = ["easy", "medium", "hard"];
    
    let selectList = document.createElement("select");
    selectList.classList.add("directionSelect", "diffSelect");
    selectList.id = "difficulty";
    diffAndVisibilityDiv.appendChild(selectList);
    
    for(let i = 0; i < array.length; i++) {
        let option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];
        selectList.appendChild(option);
    }
}

function addHeaderVisibilityCheckBox(diffAndVisibilityDiv) {
    let isPublic = document.createElement("label");
    isPublic.textContent = "Public: ";
    isPublic.classList.add("headerLabel");
    diffAndVisibilityDiv.append(isPublic);
    
    let isPublicCheckbox = document.createElement("input");
    isPublicCheckbox.type = "checkbox";
    isPublicCheckbox.value = "value";
    isPublicCheckbox.id = "isPublicCheckbox";
    diffAndVisibilityDiv.appendChild(isPublicCheckbox);
}

function addHeaderLevelSaveButton(attackCreatorHeading) {
    let saveButton = document.createElement("button");
    saveButton.classList.add("saveLevelButton");
    saveButton.textContent = "Save Level";
    saveButton.setAttribute("onClick", "save()");
    attackCreatorHeading.append(saveButton);
}

function createHeaderElements() {
    let attackCreatorHeading = document.createElement("div");
    attackCreatorHeading.classList.add("attackCreatorHeading");
    
    let heading = document.createElement("h1");
    heading.textContent = "Level Creator";
    
    addHeaderTitleInput(attackCreatorHeading);
    addHeaderDescriptionInput(attackCreatorHeading);
    
    let diffAndVisibilityDiv = document.createElement("div");
    diffAndVisibilityDiv.id = "diffAndVisibilityDiv";
    attackCreatorHeading.append(diffAndVisibilityDiv);
    
    addHeaderDifficultySelection(diffAndVisibilityDiv);
    addHeaderVisibilityCheckBox(diffAndVisibilityDiv);
    addHeaderLevelSaveButton(attackCreatorHeading);
    
    document.body.insertBefore(attackCreatorHeading, document.body.firstChild);
    document.body.insertBefore(heading, document.body.firstChild);
}

function initializeLevelCreator() {
    attackCount = 0;
    createHeaderElements();
    populateLevelCreator();
}

function populateLevelCreator() {
    document.getElementById("titleInput").value = levelJson["title"];
    document.getElementById("descriptionInput").value = levelJson["description"];
    document.getElementById("difficulty").value = levelJson["difficulty"];
    document.getElementById("isPublicCheckbox").checked = levelJson["isPublic"];
    
    for(let i = 0; i < levelJson["attacks"].length; i++) {
        let attack = levelJson["attacks"][i];
        let arrows = attack["arrows"];
        let addArrowButton = addAttack(attack["clockwiseShift"], attack["attackDelay"], true);
        for(let j = 0; j < arrows.length; j++) {
            let arrow = arrows[j];
            addArrow(addArrowButton, arrow["direction"], arrow["delay"], arrow["speed"], arrow["reversed"], true);
        }
    }
}

function save() {
    let tempJson = levelJson;
    tempJson["title"] = document.getElementById("titleInput").value;
    tempJson["description"] = document.getElementById("descriptionInput").value;
    tempJson["difficulty"] = document.getElementById("difficulty").value;
    tempJson["isPublic"] = document.getElementById("isPublicCheckbox").checked;
    if(isNewLevel) {
        $.ajax({
            type: "POST",
            url: addLevelUrl,
            contentType: "application/json",
            data: JSON.stringify(tempJson),
            dataType: "json",
            success: function(response) {
                let message = response["response"];
                alert(message);
                if(message === "Saved!") {
                    isNewLevel = false;
                }
            }
        });
    }
    else {
        $.ajax({
            type: "PATCH",
            url: updateLevelUrl,
            contentType: "application/json",
            data: JSON.stringify(tempJson),
            dataType: "json",
            success: function(response) {
                let message = response["response"];
                alert(message);
            }
        });
    }
    
    
}

function getArrowSymbol(direction) {
    switch(direction) {
        case "U":
            return "↑";
        case "D":
            return "↓";
        case "L":
            return "←";
        case "R":
            return "→";
        case "?":
            return "?";
    }
    return null;
}

function getArrowLetter(direction) {
    switch(direction) {
        case "↑":
            return "U";
        case "↓":
            return "D";
        case "←":
            return "L";
        case "→":
            return "R";
        case "?":
            return "?";
    }
    return null;
}
