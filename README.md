## CORS Policy
Required step to let the frontend part communicate with Drupal API.
In other words that will fix the following API requests error:

`Access to XMLHttpRequest at 'http://localhost:8000/api' from origin 'http://localhost:8080' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.`

### Steps to fix:
1. Create the `web/sites/cors.services.yml` file, then put the following contents to the `cors.services.yml` file:
```yml
parameters:
  cors.config:
    enabled: true
    allowedHeaders: ['*']
    allowedMethods: ['*']
    allowedOrigins: ['*']
    allowedOriginsPatterns: []
    exposedHeaders: false
    maxAge: false
    supportsCredentials: true
```
2. Create the `web/sites/default/settings.local.php` if you didn't have one. Add the following code to the `settings.local.php` file:
```php
$settings['container_yamls'][] = DRUPAL_ROOT . '/sites/cors.services.yml';
```
