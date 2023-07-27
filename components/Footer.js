export default function Footer(props) {
  return (
    <>
      <footer>
        <div className='flex items-center justify-between p-10 mt-40 text-3xl bg-green-500 text-black-50'>
          {props.formData?.length || 0} Location Word Wide
        </div>
      </footer>
    </>
  );
}
