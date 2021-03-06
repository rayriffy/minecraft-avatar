minecraft-avatar
================

An API for fetching various types of Minecraft avatar by username

Requirements
------------

- Node LTS

Contributing
------------

We welcome all contributions by sending PR to this repository.

Need Help ?
-----------

If you need help with anything, here're following methods:

#### Create an Issue

If you have something you want to discuss in detail, or have hit an issue which you believe others will also have in deployment or development of the system, [opening an issue](https://github.com/rayriffy/minecraft-avatar/issues) is the best way to get help. It creates a permanent resource for others wishing to contribute to conversation.

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

Donations
---------

If you like my project, please supporting my by [buying some coffee](https://www.buymeacoffee.com/rayriffy)
