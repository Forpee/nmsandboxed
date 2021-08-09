export default function Contact() {
  return (
    <div className='px-8 py-12 text-lg'>
      <h1 className='text-7xl mb-8'>Contact</h1>
      <p className='text-5xl mb-4 text-gray-400 opacity-20'>Where to find us</p>
      <ul className='my-12'>
        <li>
          <p><span className='font-semibold'>SOUTH AFRICA</span> Art Studios</p>
        </li>
        <li>
          <p>10 Chapel Street Maitland 7405</p>
        </li>
        <li>
          <p>Cape Town South Africa</p>
        </li>
        <li>
          <p>info@nicolaslehmann.com</p>
        </li>
        <li>
          <p>+27 (0) 790359534</p>
        </li>
      </ul>

      <ul className='my-12'>
        <li>
          <p className='font-semibold'>EUROPE</p>
        </li>
        <li>
          <p>St Paul de Vence</p>
        </li>
        <li>
          <p>europe@nicolaslehmann.com</p>
        </li>
        <li>
          <p>+33 6 30 97 87 21</p>
        </li>
      </ul>
    </div>
  );
}
