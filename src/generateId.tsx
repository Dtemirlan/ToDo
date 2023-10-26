const generateUniqueId = (): string => {
    const currentTimestamp: number = new Date().getTime();
    const randomValue: number = Math.floor(Math.random() * 1000);
    return `${currentTimestamp}-${randomValue}`;
  };
  
  export default generateUniqueId;
  