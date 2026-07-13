# Forge42 Solutions Drupal 11 Starter

A separate Drupal 11 starter site for Forge42 Solutions. This package does not modify the Heritage College project.

## Requirements

- Docker Desktop
- DDEV
- Composer

## Install

```bash
unzip Forge42_Drupal_Starter_v1.0.zip
cd forge42-drupal
ddev start
ddev composer install
ddev drush site:install standard --account-name=admin --account-pass=admin --site-name="Forge42 Solutions" -y
ddev drush en admin_toolbar admin_toolbar_tools metatag pathauto redirect webform forge42_site -y
ddev drush theme:enable forge42_theme -y
ddev drush config:set system.theme default forge42_theme -y
ddev drush config:set system.site page.front /node -y
ddev drush cr
ddev launch
```

Login: `admin` / `admin` (change immediately for anything beyond local development).

## Included

- Drupal 11 Composer project
- DDEV configuration using PHP 8.3 and MariaDB 10.11
- Custom Forge42 theme
- Responsive homepage inspired by the approved mockup
- Custom starter module
- Recommended contributed modules

## Suggested next steps

1. Create pages at `/solutions`, `/industries`, `/about`, and `/contact`.
2. Create a Webform for consultation requests and place it on `/contact`.
3. Add the primary menu links in Structure > Menus.
4. Replace placeholder branding with finalized logo artwork.
5. Add content types for Solution, Industry, Case Study, Insight, and Product.

## Notes

The theme intentionally uses only local CSS and no third-party font service, making it suitable for offline local development. The generated homepage is a functional first implementation, not a pixel-perfect reproduction of the concept image.
