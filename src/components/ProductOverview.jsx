export default function ProductOverview() {
  return (
    <div>
      <div className="w-96">
        <img src="/images/omen-16.png" className="w-96" />
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(140px,_1fr))]">
          <div>
            <img src="/images/omen-22.png" className="w-32" />
          </div>
          <div>
            <img src="/images/omen-intel.png" className="w-32" />
          </div>
          <div>
            <img src="/images/omen-transcend.png" className="w-32" />
          </div>
          <div>
            <img src="/images/omen-16.png" className="w-32" />
          </div>
        </div>
      </div>
    </div>
  );
}
