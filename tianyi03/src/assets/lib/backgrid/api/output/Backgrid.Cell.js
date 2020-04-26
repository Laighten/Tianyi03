Ext.data.JsonP.Backgrid_Cell({
  "tagname": "class",
  "name": "Backgrid.Cell",
  "extends": "Backbone.View",
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "aliases": {
  },
  "singleton": false,
  "requires": [

  ],
  "uses": [

  ],
  "enum": null,
  "override": null,
  "inheritable": null,
  "inheritdoc": null,
  "meta": {
    "abstract": true
  },
  "private": null,
  "id": "class-Backgrid.Cell",
  "members": {
    "cfg": [

    ],
    "property": [
      {
        "name": "editor",
        "tagname": "property",
        "owner": "Backgrid.Cell",
        "meta": {
        },
        "id": "property-editor"
      },
      {
        "name": "events",
        "tagname": "property",
        "owner": "Backgrid.Cell",
        "meta": {
        },
        "id": "property-events"
      },
      {
        "name": "formatter",
        "tagname": "property",
        "owner": "Backgrid.Cell",
        "meta": {
        },
        "id": "property-formatter"
      },
      {
        "name": "tagName",
        "tagname": "property",
        "owner": "Backgrid.Cell",
        "meta": {
        },
        "id": "property-tagName"
      }
    ],
    "method": [
      {
        "name": "enterEditMode",
        "tagname": "method",
        "owner": "Backgrid.Cell",
        "meta": {
        },
        "id": "method-enterEditMode"
      },
      {
        "name": "exitEditMode",
        "tagname": "method",
        "owner": "Backgrid.Cell",
        "meta": {
        },
        "id": "method-exitEditMode"
      },
      {
        "name": "initialize",
        "tagname": "method",
        "owner": "Backgrid.Cell",
        "meta": {
        },
        "id": "method-initialize"
      },
      {
        "name": "remove",
        "tagname": "method",
        "owner": "Backgrid.Cell",
        "meta": {
          "chainable": true
        },
        "id": "method-remove"
      },
      {
        "name": "render",
        "tagname": "method",
        "owner": "Backgrid.Cell",
        "meta": {
          "chainable": true
        },
        "id": "method-render"
      },
      {
        "name": "renderError",
        "tagname": "method",
        "owner": "Backgrid.Cell",
        "meta": {
        },
        "id": "method-renderError"
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "linenr": 170,
  "files": [
    {
      "filename": "cell.js",
      "href": null
    }
  ],
  "html_meta": {
    "abstract": null
  },
  "statics": {
    "cfg": [

    ],
    "property": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ]
  },
  "component": false,
  "superclasses": [
    "Backbone.View"
  ],
  "subclasses": [
    "Backgrid.BooleanCell",
    "Backgrid.DatetimeCell",
    "Backgrid.NumberCell",
    "Backgrid.SelectCell",
    "Backgrid.StringCell",
    "Backgrid.UriCell"
  ],
  "mixedInto": [

  ],
  "parentMixins": [

  ],
  "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Backbone.View<div class='subclass '><strong>Backgrid.Cell</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Backgrid.BooleanCell' rel='Backgrid.BooleanCell' class='docClass'>Backgrid.BooleanCell</a></div><div class='dependency'><a href='#!/api/Backgrid.DatetimeCell' rel='Backgrid.DatetimeCell' class='docClass'>Backgrid.DatetimeCell</a></div><div class='dependency'><a href='#!/api/Backgrid.NumberCell' rel='Backgrid.NumberCell' class='docClass'>Backgrid.NumberCell</a></div><div class='dependency'><a href='#!/api/Backgrid.SelectCell' rel='Backgrid.SelectCell' class='docClass'>Backgrid.SelectCell</a></div><div class='dependency'><a href='#!/api/Backgrid.StringCell' rel='Backgrid.StringCell' class='docClass'>Backgrid.StringCell</a></div><div class='dependency'><a href='#!/api/Backgrid.UriCell' rel='Backgrid.UriCell' class='docClass'>Backgrid.UriCell</a></div></pre><div class='doc-contents'><p>The super-class for all Cell types. By default, this class renders a plain\ntable cell with the model value converted to a string using the\nformatter. The table cell is clickable, upon which the cell will go into\neditor mode, which is rendered by a <a href=\"#!/api/Backgrid.InputCellEditor\" rel=\"Backgrid.InputCellEditor\" class=\"docClass\">Backgrid.InputCellEditor</a> instance by\ndefault. Upon encountering any formatting errors, this class will add an\n<code>error</code> CSS class to the table cell.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-editor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Cell'>Backgrid.Cell</span><br/></div><a href='#!/api/Backgrid.Cell-property-editor' class='name expandable'>editor</a><span> : <a href=\"#!/api/Backgrid.CellEditor\" rel=\"Backgrid.CellEditor\" class=\"docClass\">Backgrid.CellEditor</a></span></div><div class='description'><div class='short'>The\ndefault editor for all cell instances of this class. ...</div><div class='long'><p>The\ndefault editor for all cell instances of this class. This value must be a\nclass, it will be automatically instantiated upon entering edit mode.</p>\n\n<p>See <a href=\"#!/api/Backgrid.CellEditor\" rel=\"Backgrid.CellEditor\" class=\"docClass\">Backgrid.CellEditor</a></p>\n<p>Defaults to: <code>Backgrid.InputCellEditor</code></p></div></div></div><div id='property-events' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Cell'>Backgrid.Cell</span><br/></div><a href='#!/api/Backgrid.Cell-property-events' class='name expandable'>events</a><span> : Object</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{&quot;click&quot;: &quot;enterEditMode&quot;}</code></p></div></div></div><div id='property-formatter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Cell'>Backgrid.Cell</span><br/></div><a href='#!/api/Backgrid.Cell-property-formatter' class='name expandable'>formatter</a><span> : <a href=\"#!/api/Backgrid.CellFormatter\" rel=\"Backgrid.CellFormatter\" class=\"docClass\">Backgrid.CellFormatter</a>|Object|string</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>CellFormatter</code></p></div></div></div><div id='property-tagName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Cell'>Backgrid.Cell</span><br/></div><a href='#!/api/Backgrid.Cell-property-tagName' class='name expandable'>tagName</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&quot;td&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-enterEditMode' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Cell'>Backgrid.Cell</span><br/></div><a href='#!/api/Backgrid.Cell-method-enterEditMode' class='name expandable'>enterEditMode</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>If this column is editable, a new CellEditor instance is instantiated with\nits required parameters. ...</div><div class='long'><p>If this column is editable, a new CellEditor instance is instantiated with\nits required parameters. An <code>editor</code> CSS class is added to the cell upon\nentering edit mode.</p>\n\n<p>This method triggers a Backbone <code>backgrid:edit</code> event from the model when\nthe cell is entering edit mode and an editor instance has been constructed,\nbut before it is rendered and inserted into the DOM. The cell and the\nconstructed cell editor instance are sent as event parameters when this\nevent is triggered.</p>\n\n<p>When this cell has finished switching to edit mode, a Backbone\n<code>backgrid:editing</code> event is triggered from the model. The cell and the\nconstructed cell instance are also sent as parameters in the event.</p>\n\n<p>When the model triggers a <code>backgrid:error</code> event, it means the editor is\nunable to convert the current user input to an apprpriate value for the\nmodel's column, and an <code>error</code> CSS class is added to the cell accordingly.</p>\n</div></div></div><div id='method-exitEditMode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Cell'>Backgrid.Cell</span><br/></div><a href='#!/api/Backgrid.Cell-method-exitEditMode' class='name expandable'>exitEditMode</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Removes the editor and re-render in display mode. ...</div><div class='long'><p>Removes the editor and re-render in display mode.</p>\n</div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Cell'>Backgrid.Cell</span><br/></div><a href='#!/api/Backgrid.Cell-method-initialize' class='name expandable'>initialize</a>( <span class='pre'>options</span> )</div><div class='description'><div class='short'>Initializer. ...</div><div class='long'><p>Initializer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n<ul><li><span class='pre'>model</span> : Backbone.Model<div class='sub-desc'></div></li><li><span class='pre'>column</span> : <a href=\"#!/api/Backgrid.Column\" rel=\"Backgrid.Column\" class=\"docClass\">Backgrid.Column</a><div class='sub-desc'></div></li></ul></div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>ReferenceError</span><div class='sub-desc'><p>If formatter is a string but a formatter class of\nsaid name cannot be found in the Backgrid module.</p>\n</div></li></ul></div></div></div><div id='method-remove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Cell'>Backgrid.Cell</span><br/></div><a href='#!/api/Backgrid.Cell-method-remove' class='name expandable'>remove</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Cell\" rel=\"Backgrid.Cell\" class=\"docClass\">Backgrid.Cell</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Clean up this cell. ...</div><div class='long'><p>Clean up this cell.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Cell\" rel=\"Backgrid.Cell\" class=\"docClass\">Backgrid.Cell</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Cell'>Backgrid.Cell</span><br/></div><a href='#!/api/Backgrid.Cell-method-render' class='name expandable'>render</a>( <span class='pre'></span> ) : <a href=\"#!/api/Backgrid.Cell\" rel=\"Backgrid.Cell\" class=\"docClass\">Backgrid.Cell</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Render a text string in a table cell. ...</div><div class='long'><p>Render a text string in a table cell. The text is converted from the\nmodel's raw value for this cell's column.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Backgrid.Cell\" rel=\"Backgrid.Cell\" class=\"docClass\">Backgrid.Cell</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-renderError' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Backgrid.Cell'>Backgrid.Cell</span><br/></div><a href='#!/api/Backgrid.Cell-method-renderError' class='name expandable'>renderError</a>( <span class='pre'>model, column</span> )</div><div class='description'><div class='short'>Put an error CSS class on the table cell. ...</div><div class='long'><p>Put an <code>error</code> CSS class on the table cell.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>model</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>column</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"
});