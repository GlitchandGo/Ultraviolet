self.__uv$config = {
  prefix: '/service/',
  bare: 'https://zipbare.glitch.me', // Replace with your deployed bare server
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
};
