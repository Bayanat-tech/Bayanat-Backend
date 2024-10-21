export const userPermissionQuery = `SELECT GROUP_CONCAT(SERIAL_NO) AS serial_numbers
       FROM SEC_MODULE_DATA 
       WHERE SERIAL_NO IN (
         SELECT a.SERIAL_NO
         FROM SEC_ROLE_APP_ACCESS a
         JOIN SEC_ROLE_FUNCTION_ACCESS_USER b 
           ON a.role_id = b.SERIAL_NO_OR_ROLE_ID
         WHERE b.loginid = :loginid
         UNION
         SELECT a.SERIAL_NO_OR_ROLE_ID
         FROM SEC_ROLE_FUNCTION_ACCESS_USER a
         WHERE a.loginid = :loginid
           AND a.SERIAL_NO_OR_ROLE_ID < 90001
       )`;
export const permissionsListQuery = `SELECT DISTINCT 
app_code AS menu, 
'0' AS level, 
0 AS serial_no, 
app_code 
FROM SEC_MODULE_DATA 
WHERE LTRIM(RTRIM(level2)) = '' OR LTRIM(RTRIM(level1)) = ''

UNION

SELECT 
level1 AS menu, 
app_code AS level, 
serial_no, 
app_code AS app_code 
FROM SEC_MODULE_DATA 
WHERE LTRIM(RTRIM(level2)) = '' OR LTRIM(RTRIM(level1)) = ''

UNION

SELECT 
level2 AS menu, 
level1 AS level, 
serial_no, 
(SELECT app_code FROM SEC_MODULE_DATA WHERE LTRIM(RTRIM(level1)) != '' LIMIT 1) AS app_code 
FROM SEC_MODULE_DATA 
WHERE LTRIM(RTRIM(level3)) = '' AND LTRIM(RTRIM(level2)) != ''

UNION

SELECT 
a.level3 AS menu, 
a.level2 AS level, 
a.serial_no ,
(SELECT app_code FROM SEC_MODULE_DATA b WHERE LTRIM(RTRIM(a.level1)) = LTRIM(RTRIM(b.level1)) and LTRIM(RTRIM(a.level3)) = LTRIM(RTRIM(b.level3))  
and LTRIM(RTRIM(a.level2)) = LTRIM(RTRIM(b.level2)) LIMIT 1) AS app_code 
FROM SEC_MODULE_DATA a
WHERE LTRIM(RTRIM(a.level3)) != '' AND LTRIM(RTRIM(a.level2)) != ''`;
