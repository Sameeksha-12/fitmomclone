import "./Joinform.css"
import React from 'react'

const Joinform = () => {
  return (
    <div className="joinform">
      <form>
        <h1>Fitmomclub Enquiry Form</h1>
        <label>Your Name</label>
        <input type="text" required></input>
        <label>Email</label>
        <input type="email" required></input>
        <label>Whatsapp Number</label>
        <input minLength={10}></input>
        <label>Height(in cms)</label>
        <input required></input>
        <label>Weight(in Kg)</label>
        <input required></input>
        <label>Language Preffered</label>
        <select class="language">
            <option selected="true" value="-Select-">-Select-</option>
            <option value="English" formula_val="" textassign_val="">English</option>
            <option value="Tamil" formula_val="" textassign_val="">Tamil</option>
            <option value="Telugu" formula_val="" textassign_val="">Telugu</option>
            <option value="Hindi" formula_val="" textassign_val="">Hindi</option>
            <option value="Kannada" formula_val="" textassign_val="">Kannada</option>
            <option value="Malayalam" formula_val="" textassign_val="">Malayalam</option>
            <option value="zfs-others-zfs">Other</option>
        </select>
        <label>Location</label>
        <select className="country">
            <option value="-Select-">-Select-</option>
            <option value="Afghanistan" ctrycode="101" lwrvalue="afghanistan">Afghanistan</option>
            <option value="Albania" ctrycode="104" lwrvalue="albania">Albania</option>
            <option value="Algeria" ctrycode="105" lwrvalue="algeria">Algeria</option>
            <option value="Argentina" ctrycode="112" lwrvalue="argentina">Argentina</option>
            <option value="Armenia" ctrycode="113" lwrvalue="armenia">Armenia</option>
            <option value="Australia" ctrycode="116" lwrvalue="australia">Australia</option>
            <option value="Austria" ctrycode="117" lwrvalue="austria">Austria</option>
            <option value="Bahrain" ctrycode="120" lwrvalue="bahrain">Bahrain</option>
            <option value="Bangladesh" ctrycode="121" lwrvalue="bangladesh">Bangladesh</option>
            <option value="Belgium" ctrycode="125" lwrvalue="belgium">Belgium</option>
            <option value="Bermuda" ctrycode="128" lwrvalue="bermuda">Bermuda</option>
            <option value="Bhutan" ctrycode="129" lwrvalue="bhutan">Bhutan</option>
            <option value="Bolivia" ctrycode="130" lwrvalue="bolivia">Bolivia</option>
            <option value="Brazil" ctrycode="134" lwrvalue="brazil">Brazil</option>
            <option value="British Indian Ocean Territory" ctrycode="135" lwrvalue="british indian ocean territory">British Indian Ocean Territory</option>
            <option value="British Virgin Islands" ctrycode="136" lwrvalue="british virgin islands">British Virgin Islands</option>
            <option value="Brunei" ctrycode="137" lwrvalue="brunei">Brunei</option>
            <option value="Bulgaria" ctrycode="138" lwrvalue="bulgaria">Bulgaria</option>
            <option value="Burma" ctrycode="140" lwrvalue="burma">Burma</option>
            <option value="Cambodia" ctrycode="142" lwrvalue="cambodia">Cambodia</option>
            <option value="Canada" ctrycode="144" lwrvalue="canada">Canada</option>
            <option value="Caribbean Netherlands" ctrycode="146" lwrvalue="caribbean netherlands">Caribbean Netherlands</option>
            <option value="Central African Republic" ctrycode="148" lwrvalue="central african republic">Central African Republic</option>
            <option value="China" ctrycode="151" lwrvalue="china">China</option>
            <option value="Colombia" ctrycode="155" lwrvalue="colombia">Colombia</option>
            <option value="Croatia" ctrycode="163" lwrvalue="croatia">Croatia</option>
            <option value="Cuba" ctrycode="164" lwrvalue="cuba">Cuba</option>
            <option value="Cyprus" ctrycode="166" lwrvalue="cyprus">Cyprus</option>
            <option value="Democratic Republic of the Congo" ctrycode="157" lwrvalue="democratic republic of the congo">Democratic Republic of the Congo</option>
            <option value="Denmark" ctrycode="168" lwrvalue="denmark">Denmark</option>
            <option value="Egypt" ctrycode="174" lwrvalue="egypt">Egypt</option>
            <option value="Ethiopia" ctrycode="179" lwrvalue="ethiopia">Ethiopia</option>
            <option value="Europa Island" ctrycode="180" lwrvalue="europa island">Europa Island</option>
            <option value="Fiji" ctrycode="183" lwrvalue="fiji">Fiji</option>
            <option value="Finland" ctrycode="184" lwrvalue="finland">Finland</option>
            <option value="France" ctrycode="185" lwrvalue="france">France</option>
            <option value="Georgia" ctrycode="192" lwrvalue="georgia">Georgia</option>
            <option value="Germany" ctrycode="193" lwrvalue="germany">Germany</option>
            <option value="Ghana" ctrycode="194" lwrvalue="ghana">Ghana</option>
            <option value="Greece" ctrycode="197" lwrvalue="greece">Greece</option>
            <option value="Greenland" ctrycode="198" lwrvalue="greenland">Greenland</option>
            <option value="Holy See (Vatican City)" ctrycode="209" lwrvalue="holy see (vatican city)">Holy See (Vatican City)</option>
            <option value="Hong Kong" ctrycode="211" lwrvalue="hong kong">Hong Kong</option>
            <option value="Hungary" ctrycode="212" lwrvalue="hungary">Hungary</option>
            <option value="Iceland" ctrycode="213" lwrvalue="iceland">Iceland</option>
            <option value="India" ctrycode="214" lwrvalue="india">India</option>
            <option value="Indonesia" ctrycode="215" lwrvalue="indonesia">Indonesia</option>
            <option value="Iran" ctrycode="216" lwrvalue="iran">Iran</option>
            <option value="Iraq" ctrycode="217" lwrvalue="iraq">Iraq</option>
            <option value="Ireland" ctrycode="218" lwrvalue="ireland">Ireland</option>
            <option value="Isle of Man" ctrycode="219" lwrvalue="isle of man">Isle of Man</option>
            <option value="Israel" ctrycode="220" lwrvalue="israel">Israel</option>
            <option value="Italy" ctrycode="221" lwrvalue="italy">Italy</option>
            <option value="Jamaica" ctrycode="222" lwrvalue="jamaica">Jamaica</option>
            <option value="Japan" ctrycode="224" lwrvalue="japan">Japan</option>
            <option value="Jersey" ctrycode="225" lwrvalue="jersey">Jersey</option>
            <option value="Jordan" ctrycode="226" lwrvalue="jordan">Jordan</option>
            <option value="Kenya" ctrycode="229" lwrvalue="kenya">Kenya</option>
            <option value="Kuwait" ctrycode="233" lwrvalue="kuwait">Kuwait</option>
            <option value="Latvia" ctrycode="236" lwrvalue="latvia">Latvia</option>
            <option value="Liberia" ctrycode="239" lwrvalue="liberia">Liberia</option>
            <option value="Libya" ctrycode="240" lwrvalue="libya">Libya</option>
            <option value="Luxembourg" ctrycode="243" lwrvalue="luxembourg">Luxembourg</option>
            <option value="Madagascar" ctrycode="246" lwrvalue="madagascar">Madagascar</option>
            <option value="Malaysia" ctrycode="248" lwrvalue="malaysia">Malaysia</option>
            <option value="Maldives" ctrycode="249" lwrvalue="maldives">Maldives</option>
            <option value="Mali" ctrycode="250" lwrvalue="mali">Mali</option>
            <option value="Mauritius" ctrycode="255" lwrvalue="mauritius">Mauritius</option>
            <option value="Mexico" ctrycode="257" lwrvalue="mexico">Mexico</option>
            <option value="Mongolia" ctrycode="261" lwrvalue="mongolia">Mongolia</option>
            <option value="Montenegro" ctrycode="262" lwrvalue="montenegro">Montenegro</option>
            <option value="Montserrat" ctrycode="263" lwrvalue="montserrat">Montserrat</option>
            <option value="Morocco" ctrycode="264" lwrvalue="morocco">Morocco</option>
            <option value="Myanmar" ctrycode="266" lwrvalue="myanmar">Myanmar</option>
            <option value="Nepal" ctrycode="270" lwrvalue="nepal">Nepal</option>
            <option value="Netherlands" ctrycode="271" lwrvalue="netherlands">Netherlands</option>
            <option value="New Zealand" ctrycode="274" lwrvalue="new zealand">New Zealand</option>
            <option value="Nigeria" ctrycode="277" lwrvalue="nigeria">Nigeria</option>
            <option value="North Korea" ctrycode="231" lwrvalue="north korea">North Korea</option>
            <option value="Norway" ctrycode="281" lwrvalue="norway">Norway</option>
            <option value="Oman" ctrycode="282" lwrvalue="oman">Oman</option>
            <option value="Pakistan" ctrycode="283" lwrvalue="pakistan">Pakistan</option>
            <option value="Peru" ctrycode="290" lwrvalue="peru">Peru</option>
            <option value="Philippines" ctrycode="291" lwrvalue="philippines">Philippines</option>
            <option value="Poland" ctrycode="293" lwrvalue="poland">Poland</option>
            <option value="Portugal" ctrycode="294" lwrvalue="portugal">Portugal</option>
            <option value="Puerto Rico" ctrycode="295" lwrvalue="puerto rico">Puerto Rico</option>
            <option value="Qatar" ctrycode="296" lwrvalue="qatar">Qatar</option>
            <option value="Republic of the Congo" ctrycode="158" lwrvalue="republic of the congo">Republic of the Congo</option>
            <option value="Romania" ctrycode="298" lwrvalue="romania">Romania</option>
            <option value="Russia" ctrycode="299" lwrvalue="russia">Russia</option>
            <option value="Saudi Arabia" ctrycode="311" lwrvalue="saudi arabia">Saudi Arabia</option>
            <option value="Serbia" ctrycode="313" lwrvalue="serbia">Serbia</option>
            <option value="Singapore" ctrycode="316" lwrvalue="singapore">Singapore</option>
            <option value="South Africa" ctrycode="322" lwrvalue="south africa">South Africa</option>
            <option value="South Georgia and the South Sandwich Islands" ctrycode="323" lwrvalue="south georgia and the south sandwich islands">South Georgia and the South Sandwich Islands</option>
            <option value="South Korea" ctrycode="232" lwrvalue="south korea">South Korea</option>
            <option value="South Sudan" ctrycode="324" lwrvalue="south sudan">South Sudan</option>
            <option value="Spain" ctrycode="325" lwrvalue="spain">Spain</option>
            <option value="Sri Lanka" ctrycode="327" lwrvalue="sri lanka">Sri Lanka</option>
            <option value="Sudan" ctrycode="328" lwrvalue="sudan">Sudan</option>
            <option value="Sweden" ctrycode="332" lwrvalue="sweden">Sweden</option>
            <option value="Switzerland" ctrycode="333" lwrvalue="switzerland">Switzerland</option>
            <option value="Syria" ctrycode="334" lwrvalue="syria">Syria</option>
            <option value="Taiwan" ctrycode="335" lwrvalue="taiwan">Taiwan</option>
            <option value="Tajikistan" ctrycode="336" lwrvalue="tajikistan">Tajikistan</option>
            <option value="Tanzania" ctrycode="337" lwrvalue="tanzania">Tanzania</option>
            <option value="Thailand" ctrycode="338" lwrvalue="thailand">Thailand</option>
            <option value="The Bahamas" ctrycode="119" lwrvalue="the bahamas">The Bahamas</option>
            <option value="Turkey" ctrycode="346" lwrvalue="turkey">Turkey</option>
            <option value="Uganda" ctrycode="350" lwrvalue="uganda">Uganda</option>
            <option value="Ukraine" ctrycode="351" lwrvalue="ukraine">Ukraine</option>
            <option value="United Arab Emirates" ctrycode="352" lwrvalue="united arab emirates">United Arab Emirates</option>
            <option value="United Kingdom" ctrycode="353" lwrvalue="united kingdom">United Kingdom</option>
            <option value="United States" ctrycode="354" lwrvalue="united states">United States</option>
            <option value="Uzbekistan" ctrycode="356" lwrvalue="uzbekistan">Uzbekistan</option>
            <option value="Venezuela" ctrycode="358" lwrvalue="venezuela">Venezuela</option>
            <option value="Vietnam" ctrycode="359" lwrvalue="vietnam">Vietnam</option>
            <option value="Zimbabwe" ctrycode="367" lwrvalue="zimbabwe">Zimbabwe</option>
            <option value="zfs-others-zfs">Other</option>
        </select>
        <button className="btn">Submit</button>       
      </form>
    </div>
  )
}

export default Joinform
