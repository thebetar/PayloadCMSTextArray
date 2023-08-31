# PayloadCMSTextArray

While working with payload CMS I did not find a field that could handle an array of strings.
This was the inspiration to create this field myself and publish it so others could use it as well.

This package is a W.I.P.

To use this package import it and use it in a field like this:

```js
import { TextArrayField, TextArrayCell } from 'payload-cms-text-array';

const Users: CollectionConfig = {
    slug: 'users',
    fields: [
        ...,
        {
            name: 'skills',
            type: 'text',
            admin: {
				components: {
					Field: TextArrayField,
					Cell: TextArrayCell
				}
			},
        }
    ]
}
```

## Info

The component uses some custom classes and some classes from the dependency itself.
