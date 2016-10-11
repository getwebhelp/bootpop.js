# bootpop.js
AJAX enabled Bootstrap modal jQuery plugin set

<h3>Options</h3>

        <ul>
            <li><b>url:</b><br>The url to submit query</li>

            <li><b>method:</b><br>Request method (get, post)</li>
             
            <li><b>size:</b><br>small or large (default: medium)</li>

            <li><b>modalHeader:</b><br>true or false (default: true)</li>

            <li><b>title:</b><br>The modal header title (default: null)</li>
              
            <li><b>params:</b><br>Object <code>{keyName : value}</code></li>

            <li><b>buttons:</b><br>Array <code>
                [
                    {
                        btnClass : 'btn btn-success',
                        btnLabel : 'YES',
                        btnValue : 'Y',
                        btnAction : function(data){
                            $('.modal').modal('hide')    
                        }
                    }
                ]
            </code></li>

            <li><b>responseHandler:</b><br>Function <code>function(data){ return data}</code></li>
            
        </ul>
        
        <h3>Styles</h3>
        <ul>
            <li><b>modalClass:</b><br>Default: <code>modal fade</code></li>    
            <li><b>dialogClass:</b><br>Default: <code>modal-dialog</code></li>    
            <li><b>contentClass:</b><br>Default: <code>modal-content</code></li>    
            <li><b>headerClass:</b><br>Default: <code>modal-header</code></li>    
            <li><b>titleClass:</b><br>Default: <code>modal-title</code></li>    
            <li><b>bodyClass:</b><br>Default: <code>modal-body</code></li>    
            <li><b>footerClass:</b><br>Default: <code>modal-footer</code></li>    
            <li><b>imageClass:</b><br>Default: <code>img-responsive</code></li>    
        </ul>
        <h3>Events</h3>
        <ul>
            <li><b>opened.bp.modal</b><br>Triggered when modal is opened and visable.</li>
            <li><b>closed.bp.modal</b><br>Triggered when modal is fully closed.</li>
        </ul>
