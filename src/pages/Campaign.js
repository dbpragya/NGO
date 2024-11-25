
import Headers from "../components/Headers";
import Footer from "../components/Footer";
import kidHolding from '../assets/images/kidHoldingHouse.jpg';
import techEdu from '../assets/images/techEdu.jpg';
import donationKids from '../assets/images/donationKids.jpg';
import ambulance from '../assets/images/ambulance.jpeg';
import oldMan from '../assets/images/oldman.jpg';
import birthDay from '../assets/images/birthday-celeb.png';
import childWidth from '../assets/images/childwithcomp.png';
import Testimonial from "./Testimonial";

function Campaign() {
  return (
    <>
    <Headers/>
		<section class="campaign-hero">
			<div class="container">
				<div class="row">
					<div class="col-lg-12 text-center">
						<h1>Our <span class="major-color">Campaigns</span></h1>
						<p>Join us in making a difference through our impactful initiatives</p>
					</div>
					<hr />	
				</div>
			</div>
		</section>

		<section class="campaign-section">
			<div class="container">
				<div class="row">
					<div class="col-lg-6">
						<img class="w-100" src={ kidHolding } alt="" height="570"/>
					</div>
					<div class="col-lg-6 d-flex justify-content-center align-items-center">
						<div class="campaign-info-text">
							<div class="campaign-text-head text-left ">
								<h3 class="mb-3"><span class="major-line">Support for</span><br/>
									<span class="major-color">Our Children's Home</span>
								</h3>
							</div>
							<div class="mt-1">
								<p>Support for Our Children's Home: Our NGO is passionately committed to creating a loving and secure haven for children who require care and support. Your invaluable support enables us to provide not only a safe shelter but also holistic services that encompass education, healthcare, emotional well-being, and recreational activities. Every contribution, whether big or small, directly impacts the lives of these children, helping them heal from past traumas and build resilience for the future.</p>
								<p class="mt-3">With your generosity, we can continue to nurture these young souls, giving them the opportunity to thrive and fulfill their potential. Your involvement in our cause creates a ripple effect of positive change, not only in the lives of these children but also in our community as a whole. Together, let's build a compassionate and supportive environment where every child feels valued, loved, and empowered to succeed.</p>
							</div>
						</div>
					</div>
				</div>
				<div class="row camp-margin1 col-rev">
					<div class="col-lg-6 d-flex justify-content-center align-items-center">
						<div class="campaign-info-text">
							<div class="campaign-text-head text-left ">
								<h3 class="mb-3"><span class="major-line">Help us offer free computer</span><br/>
									<span class="major-color">hardware education to the needy</span>
								</h3>
							</div>
							<div class="mt-1">
								<p>We humbly request your support in our endeavor to provide free computer hardware training. Through our collaboration with I Computer Institute, we have established a program where we cover the tuition fees for every student enrolled. This initiative aims to empower financially disadvantaged individuals and those with a strong interest in technology by offering them access to quality education without any financial burden.</p>
								<p class="mt-3">Your contribution will directly impact the lives of these individuals, enabling them to acquire valuable skills and opportunities for a brighter future.</p>
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<img class="w-100" src={ techEdu } alt=""/>
					</div>
				</div>
				<div class="row camp-margin1">
					<div class="col-lg-6">
						<img class="w-100" src={ donationKids} alt=""/>
					</div>
					<div class="col-lg-6 d-flex justify-content-center align-items-center">
						<div class="campaign-info-text">
							<div class="campaign-text-head text-left ">
								<h3 class="mb-3"><span class="major-line">Support Hunger Relief:</span><br/>
									<span class="major-color">Food and Food Kit Donations</span>
								</h3>
							</div>
							<div class="mt-1">
								<p>We are actively combating poverty by providing regular food assistance to homeless individuals on the streets. Additionally, we extend our support to migratory workers who face challenges in meeting their basic food needs amidst financial struggles. Our commitment to expanding these efforts is steadfast, as we aspire to increase the number of beneficiaries served each day. Moreover, we aim to extend our reach to multiple states, a vision that can be realized with the collaboration of dedicated volunteers from diverse cities.</p>
								<p class="mt-3">We are aware of the substantial interest among many individuals to join us in our mission, encompassing various causes such as food donation across different regions.</p>
							</div>
						</div>
					</div>
				</div>
				<div class="row camp-margin1 col-rev">
					<div class="col-lg-6 d-flex justify-content-center align-items-center">
						<div class="campaign-info-text">
							<div class="campaign-text-head text-left ">
								<h3 class="mb-3"><span class="major-line">Support Our Ambulance</span><br/>
									<span class="major-color">Campaign: Help Save Lives</span>
								</h3>
							</div>
							<div class="mt-1">
								<p>Our Emergency Health Response Team aims to swiftly address critical health emergencies in the community. To achieve this, we plan to purchase two Maruti Suzuki Eeco Ambulances, each priced at ₹695,000 in Bangalore and Kerala, totaling ₹1,390,000 with inclusive RTO charges and insurance from Delphinus Automotive Technologies Pvt Ltd in Bengaluru.</p>
								<p class="mt-3">We are raising Rs. 14,00,000 to equip these Ambulances with essential medical amenities for emergency and critical care. Your contributions to the Rightway Charitable Foundation will enable us to start this vital operation promptly.</p>
								<p class="mt-3">Every donation counts, whether big or small. Please share our campaign link to help us reach our goal and save lives. With these Ambulances in operation, we anticipate making around 20 trips daily, saving nearly ₹40,000 for financially disadvantaged individuals and the underprivileged community. Your support will make a significant difference in our mission.</p>
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<img class="w-100" src={ ambulance } alt="" height="580"/>
					</div>
				</div>
				<div class="row camp-margin1">
					<div class="col-lg-6">
						<img class="w-100 h-100" src={ oldMan } alt=""/>
					</div>
					<div class="col-lg-6 d-flex justify-content-center align-items-center">
						<div class="campaign-info-text">
							<div class="campaign-text-head text-left ">
								<h3 class="mb-3"><span class="major-line">Empower Lives:</span><br/>
									<span class="major-color">Support People with Disabilities</span>
								</h3>
							</div>
							<div class="mt-1">
								<p>A group of around 15 individuals from Thrissur district in Kerala reached out to our charity seeking support. Despite facing challenges in providing immediate assistance, we discovered that these individuals possessed remarkable talents. One member, for instance, was a skilled sculptor known for crafting a sandalwood statue of Jesus Christ gifted to Pope John Paul II during his visit to Kerala years ago, commissioned by the diocese.</p>
								<p class="mt-3">Inspired by their talents, we helped them secure a small space where they could live and work collectively. With the support of donors, they constructed a building to house living quarters, a workshop, and hired a cook and male nurse. Additionally, they plan to launch an online store to sell their artworks and products, with profits shared among all the physically challenged residents.</p>
								<p class="mt-3">This initiative not only empowers these individuals by providing a platform for their talents but also promotes financial independence through their entrepreneurial endeavors.</p>
							</div>
						</div>
					</div>
				</div>
				<div class="row camp-margin1 col-rev">
					<div class="col-lg-6 d-flex justify-content-center align-items-center">
						<div class="campaign-info-text">
							<div class="campaign-text-head text-left ">
								<h3 class="mb-3"><span class="major-line">Support Slum Children's </span><br/>
									<span class="major-color">Birthday Celebrations</span>
								</h3>
							</div>
							<div class="mt-1">
								<p>We're launching a photography initiative through our charitable foundation, covering events like weddings, birthdays, and functions. With the profits, we aim to bring joy to children in slum areas by celebrating their birthdays. Our team will visit them with cake and gifts, capturing their special moments and providing them with a small album afterward.</p>
								<p class="mt-3">Additionally, we'll offer wedding and photography services to financially disadvantaged individuals at minimal or no cost, based on their financial situation. Our goal is to make these services affordable for everyone and create happiness for those who lack opportunities. Your support in the form of donations is crucial to make this vision a reality and bring positive change to their lives.</p>
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<img class="w-100 h-100" src={ birthDay} alt=""/> 
					</div>
				</div>
				<div class="row camp-margin1 mb-5">
					<div class="col-lg-6">
						<img class="w-100 h-100" src={ childWidth} alt="" />
					</div>
					<div class="col-lg-6 d-flex justify-content-center align-items-center">
						<div class="campaign-info-text">
							<div class="campaign-text-head text-left ">
								<h3 class="mb-3"><span class="major-line">Help Us: Start More</span><br/>
									<span class="major-color">Technical Institutions</span>
								</h3>
							</div>
							<div class="mt-1">
								<p>Technical education is essential for creating career opportunities and achieving success. It plays a significant role in the education system, contributing to the social and economic development of a nation.</p>
								<p class="mt-3">Our charitable foundation plans to start a Flour Mill, produce curry powders, and create cool drinks. This initiative will not only provide jobs for many people but also raise funds for charitable activities.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		{/* Testimonials */}
		<Testimonial />
    <Footer/>
    </>
  );
}
export default Campaign
