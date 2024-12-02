local QBCore = exports['qb-core']:GetCoreObject()
local Config = Config or {}

local function Notify(text, type, length)
    type = type or 'primary'
    length = length or 5000
    local height = Config.NotificationHeight or 'Bottom'
    local position = Config.NotificationPosition or 'Center'
    SendNUIMessage({
        text = text,
        type = type,
        length = length,
        height = height,
        position = position
    })
end
exports('Notify', Notify)
RegisterNetEvent(("%s:Notify"):format(GetCurrentResourceName()), Notify)

-- Command to test all notifications
RegisterCommand('testnotifications', function()
    Notify('This is a success notification!', 'success', 5000)
    Wait(1000)
    Notify('This is an info notification!', 'info', 5000)
    Wait(1000)
    Notify('This is a warning notification!', 'warning', 5000)
    Wait(1000)
    Notify('This is an error notification!', 'error', 5000)
    Wait(1000)
    Notify('This is a primary notification!', 'primary', 5000)
end, false)