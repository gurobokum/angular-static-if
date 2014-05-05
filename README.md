angular-static-if
=================

Additional attribute directive `ng-static-if`

General difference between `ng-if` and `ng-static-if`, that `ng-static-if` change template
and you could use, for example, recursion in template without some problems

For example, html for tree directive with recursion:
```html
<ul>
    <li ng-repeat>
        <title>{{node.name}}</title>
        <div ng-static-if="node.children.length">
            <tree val="{{node.children}}"/>
        </div>
   </li>
</ul>
```
