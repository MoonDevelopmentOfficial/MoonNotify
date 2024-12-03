# Hi 👋, I'm Moohja of Moon Development

Today I show you how to install **Moon Notify**!

## Installation

 1. Navigate to the  `qb-core/client/functions`  directory.
    
2.  Look for the  `QBCore.Functions.Notify`  function.
    
3.  Replace the existing function with the following code:
```LUA
    function QBCore.Functions.Notify(text, length, type)
        exports['MoonNotify']:Notify(text, length, type) 
    end
```
4. Save your changes.

## Config
You can choose the position of the notification with `Config.lua`.
You can select both the height and the position from right, left or center.

## Rename a file

If when downloading the file, it does so with any name other than `MoonNotify`, replace the name with `MoonNotify`.


## Requeriments

 - [QBCore Framework](https://github.com/qbcore-framework/qb-core)


## Preview

 - [Video.](https://www.youtube.com/watch?v=aCgVthfADto&t)
 
## Social Media

 - [Discord.](https://discord.gg/QcMQzQFyMd)
 - [Youtube.](https://www.youtube.com/@MoonDevelopment_Official)
 - [Cfx.re.](https://forum.cfx.re/u/moondevelopment_offi/summary)
 - [Tebex.](https://moon-development-store.tebex.io)
