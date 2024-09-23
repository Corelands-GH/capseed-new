import React, { useState } from "react";
import img from "../applyImages/Logo-19.png";

const stepLabels = [
	"Loan Details",
	"Security Details",
	"Borrower Details",
	"Solicitor and Accountants Details",
	"Assets and Liabilities for Company / Trust",
	"Director/Guarantor 1",
	"Director/Guarantor 2",
	"Assets and Liabilities for Directors/Guarantors",
];

const stepInputs = {
	1: [
		{ id: "ld_breq", label: "Brokerage Required", type: "text" },
		{
			id: "ld_icname",
			label: "Introducer Contact Name",
			type: "text",
			required: true,
		},
		{
			id: "ld_lamount",
			label: "Loan Amount",
			type: "text",
			required: true,
		},
		{
			id: "ld_linterest",
			label: "Interest to be retained",
			type: "text",
			required: true,
		},
		{ id: "ld_esdate", label: "Expected Settlement Date", type: "date" },
		// { id: "ld_lcriticaldate", label: "Loan Term", type: "text" },
		{ id: "ld_minTerm", label: "Minimum Term", type: "text" },
		{ id: "ld_maxTerm", label: "Maximum Term", type: "text" },
		{
			id: "ld_lpurpose",
			label: "Loan Purpose (include Purchase Price)",
			type: "textarea",
			required: true,
		},
		{
			id: "ld_lstrategy",
			label: "Eventual repayment strategy for loan",
			type: "textarea",
			required: true,
		},
	],
	2: [
		{
			id: "so_saddress1",
			label: "1. Security Address",
			type: "text",
			required: true,
		},
		{
			id: "so_pvalue1",
			label: "Value of Property",
			type: "text",
			required: true,
		},
		{ id: "so_treference1", label: "Title Reference", type: "text" },
		{
			id: "so_dppurchaseprice1",
			label: "Date Property Purchased & Purchase Price",
			type: "text",
		},
		{
			id: "so_spropertytype1",
			label: "Property Type",
			type: "text",
			required: true,
		},
		{ id: "so_simprovements1", label: "Improvements", type: "text" },
		{
			id: "so_ratesoutstanding1",
			label: "Rates Outstanding",
			type: "text",
		},
		{
			id: "so_scurrentmortgagee1",
			label: "Current Mortgagee/s and/or Caveat/s",
			type: "text",
			required: true,
		},
		{
			id: "so_facilities1",
			label: "Current Facilities with the mortgagee/s and/or Caveat/s",
			type: "text",
			required: true,
		},
		{ id: "so_saddress2", label: "2. Security Address", type: "text" },
		{ id: "so_pvalue2", label: "Value of Property", type: "text" },
		{ id: "so_treference2", label: "Title Reference", type: "text" },
		{
			id: "so_dppurchaseprice2",
			label: "Date Property Purchased & Purchase Price",
			type: "text",
		},
		{ id: "so_spropertytype2", label: "Property Type", type: "text" },
		{ id: "so_simprovements2", label: "Improvements", type: "text" },
		{
			id: "so_ratesoutstanding2",
			label: "Rates Outstanding",
			type: "text",
		},
		{
			id: "so_scurrentmortgagee2",
			label: "Current Mortgagee/s and/or Caveat/s",
			type: "text",
		},
		{
			id: "so_facilities2",
			label: "Current Facilities with the mortgagee/s and/or Caveat/s",
			type: "text",
		},
		{ id: "so_saddress3", label: "3. Security Address", type: "text" },
		{ id: "so_pvalue3", label: "Value of Property", type: "text" },
		{ id: "so_treference3", label: "Title Reference", type: "text" },
		{
			id: "so_dppurchaseprice3",
			label: "Date Property Purchased & Purchase Price",
			type: "text",
		},
		{ id: "so_spropertytype3", label: "Property Type", type: "text" },
		{ id: "so_simprovements3", label: "Improvements", type: "text" },
		{
			id: "so_ratesoutstanding3",
			label: "Rates Outstanding",
			type: "text",
		},
		{
			id: "so_scurrentmortgagee3",
			label: "Current Mortgagee/s and/or Caveat/s",
			type: "text",
		},
		{
			id: "so_facilities3",
			label: "Current Facilities with the mortgagee/s and/or Caveat/s",
			type: "text",
		},
	],
	3: [
		{
			id: "sad_safirm",
			label: "Solicitors Firm",
			type: "text",
			required: true,
		},
		{ id: "sad_saadd", label: "Address", type: "text", required: true },
		{ id: "sad_sacon", label: "Contact", type: "text", required: true },
		{ id: "sad_saphno", label: "Phone No.", type: "text" },
		{ id: "sad_safax", label: "Fax No.", type: "text" },
		{
			id: "sad_saemail",
			label: "Email Address",
			type: "text",
			required: true,
		},
		{ id: "sad_sadxpoadd", label: "DX or PO Box Address", type: "text" },
		{ id: "sad_aoffc", label: "Accountants Office", type: "text" },
		{ id: "sad_aofcadd", label: "Address", type: "text" },
		{ id: "sad_acon", label: "Contact", type: "text" },
		{ id: "sad_aphno", label: "Phone No.", type: "text" },
		{ id: "sad_afax", label: "Fax No.", type: "text" },
		{ id: "sad_aemail", label: "Email Address", type: "text" },
		{ id: "sad_apoadd", label: "PO Box Address", type: "text" },
	],
	4: [
		{
			id: "alc_alcproperty1",
			label: "Property/s",
			type: "text",
			required: true,
		},
		{ id: "alc_alcowner1", label: "Owner", type: "text", required: true },
		{ id: "alc_alcval1", label: "Value $", type: "text", required: true },
		{
			id: "alc_alcamtowed1",
			label: "Amount owed $",
			type: "text",
			required: true,
		},
		{
			id: "alc_alclender1",
			label: "Current Lender",
			type: "text",
			required: true,
		},
		{ id: "alc_alcproperty2", label: "Property/s", type: "text" },
		{ id: "alc_alcowner2", label: "Owner", type: "text" },
		{ id: "alc_alcval2", label: "Value $", type: "text" },
		{ id: "alc_alcamtowed2", label: "Amount owed $", type: "text" },
		{ id: "alc_alclender2", label: "Current Lender", type: "text" },
		{ id: "alc_alcproperty3", label: "Property/s", type: "text" },
		{ id: "alc_alcowner3", label: "Owner", type: "text" },
		{ id: "alc_alcval3", label: "Value $", type: "text" },
		{ id: "alc_alcamtowed3", label: "Amount owed $", type: "text" },
		{ id: "alc_alclender3", label: "Current Lender", type: "text" },
		{ id: "alc_alcproperty4", label: "Property/s", type: "text" },
		{ id: "alc_alcowner4", label: "Owner", type: "text" },
		{ id: "alc_alcval4", label: "Value $", type: "text" },
		{ id: "alc_alcamtowed4", label: "Amount owed $", type: "text" },
		{ id: "alc_alclender4", label: "Current Lender", type: "text" },
		{ id: "alc_cmbike1", label: "Car/Motor Bike", type: "text" },
		{ id: "alc_cmbowner1", label: "Owner", type: "text" },
		{ id: "alc_cmbval1", label: "Value $", type: "text" },
		{ id: "alc_cmbamtowed1", label: "Amount owed $", type: "text" },
		{ id: "alc_cmblender1", label: "Current Lender", type: "text" },
		{ id: "alc_cmbike2", label: "Car/Motor Bike", type: "text" },
		{ id: "alc_cmbowner2", label: "Owner", type: "text" },
		{ id: "alc_cmbval2", label: "Value $", type: "text" },
		{ id: "alc_cmbamtowed2", label: "Amount owed $", type: "text" },
		{ id: "alc_cmblender2", label: "Current Lender", type: "text" },
		{ id: "alc_ccard1", label: "Credit Card/s", type: "text" },
		{ id: "alc_ccowner1", label: "Owner", type: "text" },
		{ id: "alc_ccval1", label: "Value $", type: "text" },
		{ id: "alc_ccamtowned1", label: "Amount owed $", type: "text" },
		{ id: "alc_cclender1", label: "Current Lender", type: "text" },
		{ id: "alc_ccard2", label: "Credit Card/s", type: "text" },
		{ id: "alc_ccowner2", label: "Owner", type: "text" },
		{ id: "alc_ccval2", label: "Value $", type: "text" },
		{ id: "alc_ccamtowned2", label: "Amount owed $", type: "text" },
		{ id: "alc_cclender2", label: "Current Lender", type: "text" },
		{
			id: "alc_baname",
			label: "Bank Account (incl. name of bank)",
			type: "text",
		},
		{ id: "alc_baowner", label: "Owner", type: "text" },
		{ id: "alc_bavalue", label: "Value $", type: "text" },
		{ id: "alc_baamtowned", label: "Amount owed $", type: "text" },
		{ id: "alc_balender", label: "Current Lender", type: "text" },
		{ id: "alc_scvname", label: "Super (current value)", type: "text" },
		{ id: "alc_scvowner", label: "Owner", type: "text" },
		{ id: "alc_scvalue", label: "Value $", type: "text" },
		{ id: "alc_scvamtowned", label: "Amount owed $", type: "text" },
		{ id: "alc_scvlender", label: "Current Lender", type: "text" },
		{ id: "alc_stname", label: "Shares / Trusts", type: "text" },
		{ id: "alc_stowner", label: "Owner", type: "text" },
		{ id: "alc_stvalue", label: "Value $", type: "text" },
		{ id: "alc_stamtowned", label: "Amount owed $", type: "text" },
		{ id: "alc_stlender", label: "Current Lender", type: "text" },
		{ id: "alc_bvname", label: "Business Value", type: "text" },
		{ id: "alc_bvowner", label: "Owner", type: "text" },
		{ id: "alc_bvvalue", label: "Value $", type: "text" },
		{ id: "alc_bvamtowned", label: "Amount owed $", type: "text" },
		{ id: "alc_bvlender", label: "Current Lender", type: "text" },
		{ id: "alc_alcstockname", label: "Stock", type: "text" },
		{ id: "alc_alcstockowner", label: "Owner", type: "text" },
		{ id: "alc_alcstockvalue", label: "Value $", type: "text" },
		{ id: "alc_alcstockamtowned", label: "Amount owed $", type: "text" },
		{ id: "alc_alcstocklender", label: "Current Lender", type: "text" },
		{ id: "alc_alcpename", label: "Plant & Equipment", type: "text" },
		{ id: "alc_alcpeowner", label: "Owner", type: "text" },
		{ id: "alc_alcpevalue", label: "Value $", type: "text" },
		{ id: "alc_alcpeamtowned", label: "Amount owed $", type: "text" },
		{ id: "alc_alcpelender", label: "Current Lender", type: "text" },
		{ id: "alc_alcothername", label: "Other/s", type: "text" },
		{ id: "alc_alcotherowner", label: "Owner", type: "text" },
		{ id: "alc_alcothervalue", label: "Value $", type: "text" },
		{ id: "alc_alcotheramtowned", label: "Amount owed $", type: "text" },
		{ id: "alc_alcotherlender", label: "Current Lender", type: "text" },
	],
	5: [
		{
			id: "dg1_dgname1",
			label: "Director/Guarantor 1. Full Name",
			type: "text",
			required: true,
		},
		{ id: "dg1_knownas1", label: "Usually Known as", type: "text" },
		{ id: "dg1_dob1", label: "D.O.B.", type: "date" },
		{ id: "dg1_age1", label: "Age", type: "text" },
		{
			id: "dg1_dlnum1",
			label: "Drivers Licence No.",
			type: "text",
			required: true,
		},
		{
			id: "dg1_dgmaritalsy1",
			label: "Marital Status & Years",
			type: "text",
			required: true,
		},
		{
			id: "dg1_dgpartername1",
			label: "Partners Name",
			type: "text",
			required: true,
		},
		{
			id: "dg1_dgresdadd1",
			label: "Residential Address",
			type: "text",
			required: true,
		},
		{
			id: "dg1_dgnoyears1",
			label: "No. of Yrs",
			type: "text",
			required: true,
		},
		{
			id: "dg1_dgpostadd1",
			label: "Postal Address",
			type: "text",
			required: true,
		},
		{
			id: "dg1_dghomenum1",
			label: "Home Phone No.",
			type: "text",
			required: true,
		},
		{ id: "dg1_dgworknum1", label: "Work Phone No.", type: "text" },
		{
			id: "dg1_dgphnnum1",
			label: "Mobile No.",
			type: "text",
			required: true,
		},
		{ id: "dg1_dgfaxnum1", label: "Fax No.", type: "text" },
		{
			id: "dg1_dgemailadd1",
			label: "Email Address",
			type: "text",
			required: true,
		},
		{
			id: "dg1_dgoccupation1",
			label: "Occupation",
			type: "text",
			required: true,
		},
		{
			id: "dg1_dgempname1",
			label: "Name of Employer",
			type: "text",
			required: true,
		},
		{
			id: "dg1_dgyearsemployed1",
			label: "Yrs Employed",
			type: "text",
			required: true,
		},
		{
			id: "dg1_dgincome1",
			label: "Gross Income pa $",
			type: "text",
			required: true,
		},
		{
			id: "dg1_bankruptscheme1",
			label: "Have you now or have you ever been Bankrupt or entered into any Scheme of Arrangement?",
			type: "text",
			required: true,
		},
		{
			id: "dg1_dgchild1",
			label: "Name and Age of all children (including those not living at home)",
			type: "text",
			required: true,
		},
		{
			id: "dg1_dgrelativedd1",
			label: "Name, Address and Phone Number of your nearest relative who lives in Australia but NOT with you",
			type: "text",
			required: true,
		},
	],
	6: [
		{
			id: "dg2_dgname2",
			label: "Director/Guarantor 2. Full Name",
			type: "text",
		},
		{ id: "dg2_knownas2", label: "Usually Known as", type: "text" },
		{ id: "dg2_dob2", label: "D.O.B.", type: "date" },
		{ id: "dg2_age2", label: "Age", type: "text" },
		{ id: "dg2_dlnum2", label: "Drivers Licence No.", type: "text" },
		{
			id: "dg2_dgmaritalsy2",
			label: "Marital Status & Years",
			type: "text",
		},
		{ id: "dg2_dgpartername2", label: "Partners Name", type: "text" },
		{ id: "dg2_dgresdadd2", label: "Residential Address", type: "text" },
		{ id: "dg2_dgnoyears2", label: "No. of Yrs", type: "text" },
		{ id: "dg2_dgpostadd2", label: "Postal Address", type: "text" },
		{ id: "dg2_dghomenum2", label: "Home Phone No.", type: "text" },
		{ id: "dg2_dgworknum2", label: "Work Phone No.", type: "text" },
		{ id: "dg2_dgphnnum2", label: "Mobile No.", type: "text" },
		{ id: "dg2_dgfaxnum2", label: "Fax No.", type: "text" },
		{ id: "dg2_dgemailadd2", label: "Email Address", type: "text" },
		{ id: "dg2_dgoccupation2", label: "Occupation", type: "text" },
		{ id: "dg2_dgempname2", label: "Name of Employer", type: "text" },
		{ id: "dg2_dgyearsemployed2", label: "Yrs Employed", type: "text" },
		{ id: "dg2_dgincome2", label: "Gross Income pa $", type: "text" },
		{
			id: "dg2_dgbankruptscheme2",
			label: "Have you now or have you ever been Bankrupt or entered into any Scheme of Arrangement?",
			type: "text",
		},
		{
			id: "dg2_dgchild2",
			label: "Name and Age of all children (including those not living at home)",
			type: "text",
		},
		{
			id: "dg2_dgrelativeadd2",
			label: "Name, Address and Phone Number of your nearest relative who lives in Australia but NOT with you",
			type: "text",
		},
	],
	7: [
		{
			id: "aldg_alcproperty1",
			label: "Property/s",
			type: "text",
			required: true,
		},
		{ id: "aldg_alcowner1", label: "Owner", type: "text", required: true },
		{ id: "aldg_alcval1", label: "Value $", type: "text", required: true },
		{
			id: "aldg_alcamtowed1",
			label: "Amount owed $",
			type: "text",
			required: true,
		},
		{
			id: "aldg_alclender1",
			label: "Current Lender",
			type: "text",
			required: true,
		},
		{ id: "aldg_alcproperty2", label: "Property/s", type: "text" },
		{ id: "aldg_alcowner2", label: "Owner", type: "text" },
		{ id: "aldg_alcval2", label: "Value $", type: "text" },
		{ id: "aldg_alcamtowed2", label: "Amount owed $", type: "text" },
		{ id: "aldg_alclender2", label: "Current Lender", type: "text" },
		{ id: "aldg_alcproperty3", label: "Property/s", type: "text" },
		{ id: "aldg_alcowner3", label: "Owner", type: "text" },
		{ id: "aldg_alcval3", label: "Value $", type: "text" },
		{ id: "aldg_alcamtowed3", label: "Amount owed $", type: "text" },
		{ id: "aldg_alclender3", label: "Current Lender", type: "text" },
		{ id: "aldg_alcproperty4", label: "Property/s", type: "text" },
		{ id: "aldg_alcowner4", label: "Owner", type: "text" },
		{ id: "aldg_alcval4", label: "Value $", type: "text" },
		{ id: "aldg_alcamtowed4", label: "Amount owed $", type: "text" },
		{ id: "aldg_alclender4", label: "Current Lender", type: "text" },
		{ id: "aldg_furname", label: "Furniture", type: "text" },
		{ id: "aldg_furowner", label: "Owner", type: "text" },
		{ id: "aldg_furvalue", label: "Value $", type: "text" },
		{ id: "aldg_furamtowned", label: "Amount owed $", type: "text" },
		{ id: "aldg_furlender", label: "Current Lender", type: "text" },
		{ id: "aldg_cmbike1", label: "Car/Motor Bike", type: "text" },
		{ id: "aldg_cmbowner1", label: "Owner", type: "text" },
		{ id: "aldg_cmbval1", label: "Value $", type: "text" },
		{ id: "aldg_cmbamtowed1", label: "Amount owed $", type: "text" },
		{ id: "aldg_cmblender1", label: "Current Lender", type: "text" },
		{ id: "aldg_cmbike2", label: "Car/Motor Bike", type: "text" },
		{ id: "aldg_cmbowner2", label: "Owner", type: "text" },
		{ id: "aldg_cmbval2", label: "Value $", type: "text" },
		{ id: "aldg_cmbamtowed2", label: "Amount owed $", type: "text" },
		{ id: "aldg_cmblender2", label: "Current Lender", type: "text" },
		{ id: "aldg_boatcname", label: "Boat/Caravan", type: "text" },
		{ id: "aldg_boatcowner", label: "Owner", type: "text" },
		{ id: "aldg_boatcvalue", label: "Value $", type: "text" },
		{ id: "aldg_boatcamtowned", label: "Amount owed $", type: "text" },
		{ id: "aldg_boatclender", label: "Current Lender", type: "text" },
		{ id: "aldg_ccard1", label: "Credit Card/s", type: "text" },
		{ id: "aldg_ccowner1", label: "Owner", type: "text" },
		{ id: "aldg_ccval1", label: "Value $", type: "text" },
		{ id: "aldg_ccamtowned1", label: "Amount owed $", type: "text" },
		{ id: "aldg_cclender1", label: "Current Lender", type: "text" },
		{ id: "aldg_ccard2", label: "Credit Card/s", type: "text" },
		{ id: "aldg_ccowner2", label: "Owner", type: "text" },
		{ id: "aldg_ccval2", label: "Value $", type: "text" },
		{ id: "aldg_ccamtowned2", label: "Amount owed $", type: "text" },
		{ id: "aldg_cclender2", label: "Current Lender", type: "text" },
		{
			id: "aldg_baname",
			label: "Bank Account (incl. name of bank)",
			type: "text",
		},
		{ id: "aldg_baowner", label: "Owner", type: "text" },
		{ id: "aldg_bavalue", label: "Value $", type: "text" },
		{ id: "aldg_baamtowned", label: "Amount owed $", type: "text" },
		{ id: "aldg_balender", label: "Current Lender", type: "text" },
		{
			id: "aldg_lifeisvname",
			label: "Life Insurance (surrender value)",
			type: "text",
		},
		{ id: "aldg_lifeisvowner", label: "Owner", type: "text" },
		{ id: "aldg_lifeisvvalue", label: "Value $", type: "text" },
		{ id: "aldg_lifeisvamtowned", label: "Amount owed $", type: "text" },
		{ id: "aldg_lifeisvlender", label: "Current Lender", type: "text" },
		{ id: "aldg_scvname", label: "Super (current value)", type: "text" },
		{ id: "aldg_scvowner", label: "Owner", type: "text" },
		{ id: "aldg_scvalue", label: "Value $", type: "text" },
		{ id: "aldg_scvamtowned", label: "Amount owed $", type: "text" },
		{ id: "aldg_scvlender", label: "Current Lender", type: "text" },
		{ id: "aldg_stname", label: "Shares / Trusts", type: "text" },
		{ id: "aldg_stowner", label: "Owner", type: "text" },
		{ id: "aldg_stvalue", label: "Value $", type: "text" },
		{ id: "aldg_stamtowned", label: "Amount owed $", type: "text" },
		{ id: "aldg_stlender", label: "Current Lender", type: "text" },
		{ id: "aldg_bvname", label: "Business Value", type: "text" },
		{ id: "aldg_bvowner", label: "Owner", type: "text" },
		{ id: "aldg_bvvalue", label: "Value $", type: "text" },
		{ id: "aldg_bvamtowned", label: "Amount owed $", type: "text" },
		{ id: "aldg_bvlender", label: "Current Lender", type: "text" },
		{ id: "aldg_alcstockname", label: "Stock", type: "text" },
		{ id: "aldg_alcstockowner", label: "Owner", type: "text" },
		{ id: "aldg_alcstockvalue", label: "Value $", type: "text" },
		{ id: "aldg_alcstockamtowned", label: "Amount owed $", type: "text" },
		{ id: "aldg_alcstocklender", label: "Current Lender", type: "text" },
		{ id: "aldg_alcpename", label: "Plant & Equipment", type: "text" },
		{ id: "aldg_alcpeowner", label: "Owner", type: "text" },
		{ id: "aldg_alcpevalue", label: "Value $", type: "text" },
		{ id: "aldg_alcpeamtowned", label: "Amount owed $", type: "text" },
		{ id: "aldg_alcpelender", label: "Current Lender", type: "text" },
		{ id: "aldg_alcothername", label: "Other/s", type: "text" },
		{ id: "aldg_alcotherowner", label: "Owner", type: "text" },
		{ id: "aldg_alcothervalue", label: "Value $", type: "text" },
		{ id: "aldg_alcotheramtowned", label: "Amount owed $", type: "text" },
		{ id: "aldg_alcotherlender", label: "Current Lender", type: "text" },
		{ id: "form_comment", label: "Comments", type: "textarea" },
	],
	8: [
		{ id: "pdsd_t1", label: "Title", type: "text", required: true },
		{ id: "pdsd_surname1", label: "Surname", type: "text", required: true },
		{
			id: "pdsd_givenname1",
			label: "Given Names",
			type: "text",
			required: true,
		},
		{ id: "pdsd_add1", label: "Address", type: "text", required: true },
		{
			id: "pdsd_dlnum1",
			label: "Driver's License - Number",
			type: "text",
			required: true,
		},
		{
			id: "pdsd_dlstate1",
			label: "Driver's License - State of Issue",
			type: "text",
			required: true,
		},
		{
			id: "pdsd_dlcardnum1",
			label: "Driver's License - Card Number",
			type: "text",
			required: true,
		},
		{ id: "pdsd_dob1", label: "Date of Birth", type: "date" },
		{ id: "pdsd_phnnum1", label: "Phone", type: "text", required: true },
		{ id: "pdsd_email1", label: "Email", type: "text", required: true },
		{
			id: "pdsd_maritalstatus1",
			label: "Marital Status",
			type: "text",
			required: true,
		},
		{ id: "pdsd_t2", label: "Title", type: "text" },
		{ id: "pdsd_surname2", label: "Surname", type: "text" },
		{ id: "pdsd_givenname2", label: "Given Names", type: "text" },
		{ id: "pdsd_add2", label: "Address", type: "text" },
		{ id: "pdsd_dlnum2", label: "Driver's License - Number", type: "text" },
		{
			id: "pdsd_dlstate2",
			label: "Driver's License - State of Issue",
			type: "text",
		},
		{
			id: "pdsd_dlcardnum2",
			label: "Driver's License - Card Number",
			type: "text",
		},
		{ id: "pdsd_dob2", label: "Date of Birth", type: "date" },
		{ id: "pdsd_phnnum2", label: "Phone", type: "text" },
		{ id: "pdsd_email2", label: "Email", type: "text" },
		{ id: "pdsd_maritalstatus2", label: "Marital Status", type: "text" },
		{
			id: "signature-app1",
			label: "Applicant Signature 1",
			type: "signature",
		},
		{
			id: "signature-app2",
			label: "Applicant Signature 2",
			type: "signature",
		},
	],
};

function LoanDetail() {
	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleStepChange = (step) => {
		setCurrentStep(step);
	};

	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormData({
			...formData,
			[id]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		emailjs
			.send(
				"service_7mc7n0b", // Replace with your EmailJS service ID
				"template_5oe5a8n", // Replace with your EmailJS template ID
				formData,
				"7capRyCYKsmz9CMRD" // Replace with your EmailJS user ID
			)
			.then(
				(result) => {
					alert("Form submitted successfully!");
					setIsSubmitting(false);
				},
				(error) => {
					console.error("Failed to submit form: ", error.text);
					setIsSubmitting(false);
				}
			);
	};

	return (
		<>
			<div className="py-[6rem] bg-[#1D332D] px-[1rem] md:px-[9.7rem] flex flex-col gap-[.5rem] md:items-start items-center">
				<img src={img} className="w-[10rem] h-[1.2rem] mb-2" alt="" />
				<div className="text-white text-[2rem] md:text-4xl text-center">
					<h1 className="">
						<span className="text-[#b2baaa]">
							{stepLabels[currentStep - 1]}
						</span>
					</h1>
				</div>
			</div>
			<div className="flex justify-center pb-[8rem] w-full">
				<div className="text-white bg-white px-6 pb-6 shadow-md md:w-[80%] border-b border-l border-r border-[#303c36] w-full">
					<div className="flex flex-wrap 2xl:flex-nowrap w-full text-[.5rem] md:text-[1rem] lg:text-[1.5rem] text-[#303c36]">
						{stepLabels.map((label, index) => (
							<button
								key={index}
								className={`flex-1 border-r border-[#303c36] text-xs border-b py-2 ${
									currentStep === index + 1
										? "bg-white border-none"
										: "bg-[#c9c9c9]"
								}`}
								onClick={() => handleStepChange(index + 1)}
							>
								{stepLabels[index]}
							</button>
						))}
					</div>

					<div className="mt-6 bg-[#1D332D] p-8 md:p-[2.5rem] font-poppins text-light">
						<form onSubmit={handleSubmit}>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
								{stepInputs[currentStep].map((input) => (
									<div
										key={input.id}
										className={
											input.type === "textarea"
												? "md:col-span-3"
												: ""
										}
									>
										<label
											htmlFor={input.id}
											className="block lg:text-sm text-[.6rem] font-medium mb-4"
										>
											{input.label}{" "}
											{input.required && (
												<span className="text-red-500">
													*
												</span>
											)}
										</label>
										{input.type === "textarea" ? (
											<textarea
												id={input.id}
												rows="6"
												className="shadow appearance-none rounded w-full py-2 px-3 bg-[#303c36] outline-none"
												onChange={handleChange}
											></textarea>
										) : (
											<input
												type={input.type}
												id={input.id}
												className="shadow appearance-none rounded w-full py-4 px-3 text-white bg-[#303c36] outline-none"
												onChange={handleChange}
											/>
										)}
									</div>
								))}
							</div>

							<div className="mt-6 flex md:items-end md:justify-end items-center justify-center">
								{currentStep < stepLabels.length ? (
									<button
										className="py-[0.8rem] px-[2rem] md:text-[18px] items-center text-[#1c322c] rounded-md bg-white"
										onClick={(e) => {
											e.preventDefault();
											setCurrentStep(currentStep + 1);
										}}
									>
										Next
									</button>
								) : (
									<button
										type="submit"
										className="py-[0.8rem] px-[2rem] md:text-[18px] items-center text-[#1c322c] rounded-md bg-[#fff]"
										disabled={isSubmitting}
									>
										{isSubmitting
											? "Submitting..."
											: "Submit"}
									</button>
								)}
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default LoanDetail;
