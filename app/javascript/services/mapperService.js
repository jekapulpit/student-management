export function mapFieldsToValues(fields) {
    let newAttributes = fields;
    for (var key in newAttributes) {
        newAttributes[key] = fields[key].value
    }
    return newAttributes;
}
