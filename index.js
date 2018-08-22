// eventHandler function

function eventHandler() {
    
    // Add items using the form
    
    $('form#js-shopping-list-form').on('submit', function(event) {
       
        // Prevent form submission
        event.preventDefault();
        
        // Identify new item value
        
        let newItem = $(this)[0][0].value;
        
        // Create new HTML
        
        newHTML = `
            <li>
                <span class="shopping-item">${newItem}</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                    </button>
                </div>
            </li>`
            
        // Append new HTML to shopping list
        
        $('ul.shopping-list').append(newHTML);
        
    });
    
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