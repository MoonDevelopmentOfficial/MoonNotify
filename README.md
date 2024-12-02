# Hi 👋, I'm Moohja of Moon Development

Today I show you how to install **Moon Notify**!

## Installation

 1. Navigate to the  `qb-core/client/functions`  directory.
    
2.  Look for the  `QBCore.Functions.Notify`  function.
    
3.  Replace the existing function with the following code:

    function QBCore.Functions.Notify(text, length, type)
        exports['qb-notify']:Notify(text, length, type) 
    end
