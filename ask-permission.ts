const readPermissionRequest: Deno.PermissionDescriptor = { name: 'read' };
const readPermissionStatus: Deno.PermissionStatus = await Deno.permissions.request(readPermissionRequest);

if (readPermissionStatus.state === 'granted') {
    const text: string = Deno.readTextFileSync('./hello-world.js');
    console.log(text);
} else {
    console.log('No permission to read file');
}