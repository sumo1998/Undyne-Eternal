SELECT *
FROM user_info
WHERE user_id = %(user_id)s
{% if check_email %}
OR user_email = %(user_email)s
{% endif %}