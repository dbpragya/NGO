import Headers from '../components/Headers'
import Footer from '../components/Footer'
import twoImg from '../assets/images/2168.jpg';
import aboutImg from '../assets/images/about.png';
import volunteerholding from '../assets/images/volunteers-holding.jpg';

function Story(){
    return (
    <>
    <Headers/>
        <section class="gallery-hero">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h1>Our <span class="major-color">Stories</span></h1>
					<p>
						At Rightway Charitable Foundation, we believe that real change is best measured through the lives we touch and transform. Here are some of the inspiring stories that highlight our commitment and impact:
					</p>
				</div>
				<hr/>	
			</div>
		</div>
	    </section>

        <section class="about-head">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
						<img class="w-100 h-100 object-fit-cover" src={twoImg } alt="" />
					</div>
					<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
						<div class="main-content">
							<div class="subhead s text-left ">
								<h2 class="text-left mb-3"><span class="major-line"> Continuous Support for Over 200 Children</span><br/>
									{/* <!--<span class="major-color">Continuous Support for Over 200 Children</span>--> */}
								</h2>
							</div>
							<div class="content-para mt-1">
								<p>We are proud to provide ongoing support to more than 200 children across various states in India. Through our dedicated programs, these children receive not only basic necessities like food and shelter but also educational resources and emotional support. Our efforts ensure they have the opportunity to build a brighter future, free from the constraints of poverty.</p>
						         <p class="mt-3"> The smiles on their faces and their academic achievements are a testament to the power of sustained, compassionate care.</p>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- row our mission --> */}
                <div class="row about-margin2 mb-5 col-rev">
        			<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
						<div class="main-content">
							<div class="subhead s text-left ">
								<h2 class="text-left mb-3"><span class="major-line">Shelter, Food, and Education for Orphaned Children</span><br/>
									{/* <!--<span class="major-color">Nurturing Children & Driving Community Development</span>--> */}
								</h2>
							</div>
							<div class="content-para mt-1">
								<p>Among the 200 children we support, 70 are orphaned and receive comprehensive care including shelter, 
								food, and education. These children are provided with a safe and nurturing environment where
								they can grow and thrive. We ensure they have access to quality education, nutritious meals,
								and emotional support. The transformation in their lives is profound, as they move from uncertainty
								to stability, gaining the tools and confidence to build a better future. </p>
								
                			<p class="mt-3"> The stories of these children overcoming adversity to achieve academic success and personal growth are a testament to the importance of our mission. </p>
  						</div>
						</div>
					</div>
					<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
						<img class="w-100" src={ aboutImg } alt="" />
					</div>
				</div>

                {/* <!-- row 03  our vision--> */}
                <div class="row about-margin2">
					<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
						<img class="w-100 h-100 object-fit-cover" src={volunteerholding } alt="" />
					</div>
					<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
						<div class="main-content">
							<div class="subhead s text-left ">
								<h2 class="text-left mb-3"><span class="major-line">Transformative Surgery Support: Mr. Anu's Story</span> <br/>
									{/* <!--<span class="major-color">Transformative Surgery Support: Mr. Anu's Story</span>--> */}
								</h2>
							</div>
							<div class="content-para mt-1">
								<p>One of our most heartwarming success stories is that of Mr. Anu. After a severe fall, Mr. Anu was rushed to the hospital where he was diagnosed with a subarachnoid hemorrhage, a life-threatening condition. The necessary surgery at First Neuro Hospital in Mangalore cost 9 lakhs INR, a sum far beyond his family's means. At the time, his wife was eight months pregnant, and they had two small children to care for. </p>
                                <p class="mt-3">Determined to help, we launched a campaign and successfully raised the needed funds through the generosity of our supporters. The surgery was a success, and today, Mr. Anu is back with his family, enjoying life and cherishing moments with his newborn and other children. This story is a powerful reminder of how collective efforts and compassion can save lives and restore hope.</p>
							</div>
						</div>
					</div>
				</div>

				{/* <!--row 04--> */}
				<div class="row about-margin2 mb-5 col-rev">
                    <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
						<div class="main-content">
							<div class="subhead s text-left ">
								<h2 class="text-left mb-3"><span class="major-line">Daily Food Distribution</span><br/>
									{/* <!--<span class="major-color">Nurturing Children & Driving Community Development</span>--> */}
								</h2>
							</div>
							<div class="content-para mt-1">
								<p> Hunger is a pressing issue for many, and our daily food distribution program aims to address this critical need. Every day, we distribute nutritious meals to hundreds of individuals living on the streets of various cities. This initiative ensures that those who are most vulnerable have access to the sustenance they need to survive and thrive. The gratitude and relief on the faces of those we serve are powerful indicators of the difference a meal can make. </p>
								
                                <p class="mt-3"> One of our beneficiaries shared how these meals have been a lifeline, providing both physical nourishment and a sense of community.</p>
  		                    </div>
						</div>
					</div>
					<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
						<img class="w-100 h-100 object-fit-cover" src={ volunteerholding } alt=""/>
					</div>
					
				</div>
				
				{/* <!--row 05--> */}
				 <div class="row about-margin2">
					<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
						<img class="w-100 h-100 object-fit-cover" src={ volunteerholding } alt="" />
					</div>
					<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
						<div class="main-content">
							<div class="subhead s text-left ">
								<h2 class="text-left mb-3"><span class="major-line"> Supporting Education</span> <br/>
									{/* <!--<span class="major-color">Transformative Surgery Support: Mr. Anu's Story</span>--> */}
								</h2>
							</div>
							<div class="content-para mt-1">
								<p>Education is a powerful tool for breaking the cycle of poverty, and we are committed to supporting the academic aspirations of many children and degree students. Through our scholarship programs and educational initiatives, we provide financial assistance, school supplies, and mentorship to help these students succeed. Our support extends to a broad range of students, from primary school children to those pursuing higher education degrees. Many of our supported students have gone on to excel in their studies and are now on paths to fulfilling careers </p>
                                <p class="mt-3"> These successes highlight the transformative power of education and the importance of investing in our youth.</p>
							</div>
						</div>
					</div>
				</div>
				
				<p class="mt-5">These stories are just a glimpse into the impact of Rightway Charitable Foundation. We are committed to continuing our mission, ensuring that more individuals and communities can experience such positive transformations.</p>
			</div>
		</section> 
		
    <Footer/>
    </>
    )
}

export default Story