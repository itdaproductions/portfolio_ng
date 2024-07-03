**_The usage of the gallery heavily depends on data.ts and gallery folders for local management of the portfolio_**

# Usage

To edit the portfolio page to your needs all you need to do is:

1. Use the **data.ts** file inside the **assets** folder
2. Add folders and images as needed for categories

## How to use the data.ts file

### Data

| Field                 | Usage                                                            | Translatable | Type    |
| --------------------- | ---------------------------------------------------------------- | ------------ | ------- |
| directoryUrl          | The value used here must match an existing folder for a category | No           | string  |
| directoryTitle        | The title of the category                                        | Yes          | string  |
| directoryDescription  | The description of the category                                  | Yes          | string  |
| directoryDisplayMedia | Allow a preview of the media for the category                    | No           | boolean |
| media                 | The media array                                                  | No           | Array   |

### Media

| Field       | Usage                                                                                                                     | Translatable | Type   |
| ----------- | ------------------------------------------------------------------------------------------------------------------------- | ------------ | ------ |
| url         | For **type** of 'image' it should be just the media name eg: '1.png' <br> For 'video' it should be a direct external link | No           | string |
| title       | Title displayed for your media                                                                                            | Yes          | string |
| description | Description displayed for your media                                                                                      | Yes          | string |
| type        | 'image' or 'video'                                                                                                        | No           | string |

### Translations

The fields that are translatable can have the corresponding translation for each language in the **i18n** folder
Some translations are already being used by default placeholders for the portfolio, you can edit and/or extend from there
Eg:

#### data.ts

```
{
  ...
  directoryTitle: "data-music-directory-title"
}

```

#### pt-PT.json

```
{
  ...
  "data-music-directory-title": "Music""
}
```

# Testing locally before production

> npm start

This should give you an url to open in your browser
While running, any changes that you make will automatically recompile and update

The default link should be **localhost:4200**

# Compile for production

Whenever you are done with changes to data.ts and managing your gallery folder images
Run the following commands:

> npm run build --prod

This will create a folder named **dist** that should contain the subfolder **portfolio**

All the content inside **portfolio** is your web page ready to be served

Just copy content in **portfolio** to wherever your web page is hosted
