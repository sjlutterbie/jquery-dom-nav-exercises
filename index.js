// eventHandler function

function eventHandler() {
    
    // Add items using the form
    
    // Check/uncheck items
    
    $('ul.shopping-list').on('click', '.shopping-item-toggle', function(event){
        
        // Navigate DOM to label, toggle checked class
        
        $(this).parents('li').children('span.shopping-item')
            .toggleClass('shopping-item__checked');
        
    });
    
            //shopping-item__checked
    
    // Permanently remove items from the list
    
}

// Launch App!

$(eventHandler());