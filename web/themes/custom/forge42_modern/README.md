# Forge42 Modern v1.1

This theme has a different machine name (`forge42_modern`) so it can be installed beside the original `forge42_theme` without overwriting it.

## Install

Extract to:

`web/themes/custom/forge42_modern`

Then run:

```bash
ddev drush theme:enable forge42_modern -y
ddev drush config:set system.theme default forge42_modern -y
ddev drush cr
```

## Configure blocks

Go to:

`/admin/structure/block/list/forge42_modern`

Place:

- Main navigation → Primary menu
- Main page content → Content
- Site branding (optional) → Header
- Footer block(s) → Footer

The front page includes the complete Forge42 marketing layout and still renders Drupal's Content top, Content, and Content bottom regions.
