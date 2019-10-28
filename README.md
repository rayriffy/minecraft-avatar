minecraft-avatar
================

An API for fetching various types of Minecraft avatar by username

Requirements
------------

- Node LTS

API
----

API is based on HTTPS requests and JSON responses.

The stable HTTPS endpoint for the latest version is: `https://avatar.minecraft.api.rayriffy.com/v1/`

### Get avatar

Get a desired type of avatar

**HTTP request**

`GET /:type/:username`

**Request headers**

| Request header | Description      |
| -------------- | ---------------- |
| Content-Type   | application/json |

**Path parameters**

| Parameter | Description                                                                        |
| --------- | ---------------------------------------------------------------------------------- |
| type      | Types of data (Available: `avatar`, `cape`, `skin`, `render/body`, `render/head`)  |
| username  | Minecraft username                                                                 |

**Response**

Returns a 200 HTTP status code and a binary of image.