# react-data-components-bulma

[![Build Status](https://travis-ci.org/carlosrocha/react-data-components.svg?branch=master)](https://travis-ci.org/carlosrocha/react-data-components)

DataTable: [Live demo and source](https://jsfiddle.net/lbclucascosta/qa4guxhv/)

SelectableTable: [Live demo and source](https://jsfiddle.net/carlosrocha/p9pouh1v/)

## Getting started

```sh
npm install react-data-components-bulma --save
```

This component requires [Bulma](https://bulma.io/) stylesheet and Font Awesome fonts, in addition
to the [stylesheet for headers](css/table-twbs.css). If you are using Webpack
and the `css-loader` you can also require the css
with `require('react-data-components/css/table-twbs.css')`.

### Using the default implementation

The default implementation includes a filter for case insensitive global search,
pagination and page size.

```javascript
var React = require('react');
var ReactDOM = require('react-dom');
var DataTable = require('react-data-components').DataTable;

var columns = [
  { title: 'Name', prop: 'name'  },
  { title: 'City', prop: 'city' },
  { title: 'Address', prop: 'address' },
  { title: 'Phone', prop: 'phone' }
];

var data = [
  { name: 'name value', city: 'city value', address: 'address value', phone: 'phone value' }
  // It also supports arrays
  // [ 'name value', 'city value', 'address value', 'phone value' ]
];

ReactDOM.render((
    <DataTable
      keys="name"
      columns={columns}
      initialData={data}
      initialPageLength={5}
      initialSortBy={{ prop: 'city', order: 'descending' }}
    />
  ), document.getElementById('root'));
```

### Enable row click and support to portuguese language
To convert the language to Portuguese (Brasil) it's possible indicating with `language` prop. Also, it's possible to enable click event on each row and associate to a callback.

```
onRowClick(row){
    console.log('Row clicked: ', row)
}

ReactDOM.render((
    <DataTable
      keys="name"
      columns={columns}
      initialData={data}
      initialPageLength={5}
      language='pt-BR'
      onRowClick={this.onRowClick}
      initialSortBy={{ prop: 'city', order: 'descending' }}
    />
  ), document.getElementById('root'));
```


See [complete example](example/table/main.js).