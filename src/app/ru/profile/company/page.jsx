export default function RuCompanyPage() {
  return (
    <div>
      <main className="main__company">
        <div className="_container main__container ">
          <div className="main__student__company">
            <div className="main__student__company-info">
              <div className="main__company__cover">
                <img src={"/assets/images/logo_company.png"} alt="" />
              </div>
              <div className="main_student__company_subtitle">
                <div className="rows__company">
                  <div className="row__company row__speciality ">
                    <span className="">Название компании</span>
                    <p>ИП “TROYA”</p>
                  </div>
                  <div className="row row__qualification">
                    <span>БИН компании</span>
                    <p>110524581947</p>
                  </div>
                  <div className="row row__phone">
                    <span>Номер телефона </span>
                    <p>+7 (707) 777 77 77</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="button__redc__company">
              <button className="redc__company">
                <a href="#" className='redc__company__subtitle'>Редактировать </a>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
