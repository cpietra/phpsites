function FindProxyForURL(url, host)

{

if (isInNet(host, "192.168.0.0", "255.255.255.0"))

return "PROXY servidor.mt-desarrollos.com.ar:3128";

else

return "DIRECT";

} 