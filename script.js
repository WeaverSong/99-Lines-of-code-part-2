//util function
const AddElement = function (type, parent, text, properties, eventListeners) {
    let NewElement = document.createElement(type);
    if (text !== undefined) NewElement.textContent = text;

    for (key in properties)
    {
        NewElement[key] = properties[key];
    }
    for (key in eventListeners)
    {
        NewElement.addEventListener(key, eventListeners[key]);
    }

    if (parent) parent.appendChild(NewElement);

    return NewElement;
};

//List of five friends
const Friends = ["Naharie", "Wingspan", "Novacat", "Laious", "WingedSeal"];

//The hint said I would need 2 loops, so I decided to do it in 0, and use recursion instead.
const song = function (names, number, parent)
{
    if (typeof(names) != "string")
    {
        if (names.length == 0) return;
        let name = names.splice(0, 1)[0];

        let parentElement = AddElement('div', document.body, '', { className: 'friend' });
        AddElement('h3', parentElement, name);

        song(name, 99, parentElement);
        if (names.length != 0) song(names);
    }
    else
    {
        if (number > 2)
        {
            AddElement('p', parent, `${number} lines of code in the file, ${number} lines of code; ${names} strikes one out, clears it all out, ${number - 1} lines of code in the file`)
            song (names, number - 1, parent);
        }
        else if (number == 2)
        {
            AddElement('p', parent, `2 lines of code in the file, 2 lines of code; ${names} strikes one out, clears it all out, 1 line of code in the file`);
            song (names, number - 1, parent);
        }
        else
        {
            AddElement('p', parent, `1 line of code in the file, 1 line of code; ${names} strikes one out, clears it all out, no more lines of code in the file`);
        }
    }
}

AddElement('button', document.body, 'Sing!', {}, {
    click: function () {
        song(Friends);
    }
});