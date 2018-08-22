// eventHandler function

function eventHandler() {
    
    // Add items using the form
    
    // Check/uncheck items
    
    $('ul.shopping-list').on('click', '.shopping-item-toggle', function(event){
        
        // Navigate DOM to label, toggle checked class
        
        $(this).parents('li').children('span.shopping-item')
            .toggleClass('shopping-item__checked');
        
    });
    
    // Permanently remove items from the list
    
    $('ul.shopping-list').on('click', '.shopping-item-delete', function(event){

        // Navigate to parent li element, remove.
        
        $(this).parents('li').remove();
        
    });
    
}

// Launch App!

$(eventHandler());