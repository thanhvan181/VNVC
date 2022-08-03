import React from 'react'
import Banner from '../../components/Banner'
import FooterBanner from '../../components/FooterBanner'
import InfoCenter from '../../components/InfoCenter'
import ShowProduct from '../../components/ShowProduct'
import VaccineCate from '../../components/VaccineCate'



import VacsinReview from '../../components/VacsinReview'
import VacsinReviewthree from '../../components/VacsinReviewthree'
import VacsinReviewtwo from '../../components/VacsinReviewtwo'
import VacsinSteps from '../../components/VacsinSteps'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
     
      <Banner/>
      <VacsinSteps />
     <VacsinReview/>
     <VaccineCate/>
     <ShowProduct/>
      <VacsinReviewtwo/>
     
      
      <VacsinReviewthree/>
      <InfoCenter/>
      <FooterBanner/>
     
     
     
      
    </div>
  )
}

export default HomePage