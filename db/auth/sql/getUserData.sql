SELECT *
FROM user_info
WHERE user_id = '{{user_id}}'
{% if check_email %}
OR user_email = '{{user_email}}'
{% endif %}