# bootpop.js

AJAX Enabled Bootstrap Modal jQuery Plugin Set

 * AJAX content by default with pre-loader
 * JSON content handler
 * Multi-modal (launch modals from inside modals)
 * Alert and Confirm modals with buttons
 * Image and HTML content modals

## Demos
[Click here](http://getwebhelp.com/bootpop/) to see the examples in action.

## Usage
```javasccript
Bootpop('ajax.php');
```
```javasccript
Bootpop.alert('Some message');
```
```javasccript
Bootpop.ask('Some question');
```
```javasccript
Bootpop.image('/src/to/img.png');
```
```javasccript
Bootpop.html('<h1>Hello</h1><h2>World!</h2>');
```

## Options

* **url:** The url to submit query
* **method:** Request method (get, post)
* **size:** small or large (default: medium)
* **modalHeader:** true or false (default: true)
* **title:** The modal header title (default: null)
* **params:** (Object) ```{keyName : value}```
* **buttons:** (Array) 
```javascript
[{ 
   btnClass : 'btn btn-success', 
   btnLabel : 'YES', 
   btnValue : 'Y', 
   btnAction : function(data){ 
       $('.modal').modal('hide') 
   } 
}]
```
* **responseHandler:** (Function) ```function(data){ return data}```

### Styles

* **modalClass:** ```modal fade```
* **dialogClass:**  ```modal-dialog```
* **contentClass:**  ```modal-content```
* **headerClass:** ```modal-header```
* **titleClass:** ```modal-title```
* **bodyClass:** ```modal-body```
* **footerClass:** ```modal-footer```
* **imageClass:** ```img-responsive```

### Events

* **opened.bp.modal** Triggered when modal is opened and visable.
* **closed.bp.modal** Triggered when modal is fully closed.
