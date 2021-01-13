const readPermission = await Deno.permissions.request({ name: 'read' });

if (readPermission.state === 'granted') {
    const text = Deno.readTextFileSync('./hello-world.js');
    console.log(text);
} else {
    console.log('No permission to read file');
}