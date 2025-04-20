import React from 'react'

const NumberBox = () => {
  function isPrime(num) {
    if(num<2) return false
    for(let i = 2; i <= Math.sqrt(num); i++){
      if (num % i === 0) return false;
    }
    return true;
  }
      
  let  numbers = [];
  let  totalOdd =[];
  let totalEven =[];
  let totalPrime =[];
  for(let i=0; i <= 100; i++) {
    numbers.push(i);
    isPrime(i)
    ? totalPrime.push(i)
    : i % 2 === 0 
    ? totalEven.push(i)
    : totalOdd.push(i)

  }
  console.log(numbers)
  console.log(totalPrime.length, totalEven.length, totalOdd.length);

  function getColor(num){
    if (isPrime(num)) return "bg-red-500";
    if (num % 2 === 0) return "bg-green-500";
    return "bg-yellow-500";  
  }
  return (
    <section className='flex flex-col gap-10'>
      <h1 className='text-primaryBlue text-3xl text-center py-2 w-full'>{`The total number below is ${numbers.length},
      which has ${totalEven.length} Even Numbers, ${totalOdd.length}
      odd Numbers and ${totalPrime.length} Prime Number `}
      </h1>
    <div className=' flex flex-wrap gap-6 justify-center items-center'>
       {numbers.map((num, index) => (
      <div className={`${getColor(
        num)}
       h-20 w-20 text-2xl text-black font-bold rounded-xl flex justify-center items-center `}key={index}>{num}</div>
       ))}
    </div>
    </section>
  )
}

export default NumberBox 