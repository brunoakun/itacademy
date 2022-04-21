let CLIENTES=[];

const cliente1 = new Cliente("6395211R", "Bruno");
const cliente2 = new Cliente("1254785F", "Quka");

const cuenta1=new Cuenta('1',10);
const cuenta2=new Cuenta('2',200);

cliente1.addCuenta(cuenta1);
cliente1.addCuenta(cuenta2);

CLIENTES.push(cliente1);
CLIENTES.push(cliente2);



console.log(CLIENTES);