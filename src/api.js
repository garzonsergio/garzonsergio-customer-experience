const url = "https://api.smart-home.com.co/api/v1";
const url2 = "https://manage.smart-home.com.co/CustomerExperienceApi.ashx";

async function getProject(code) {
  try {
    const answers = await fetch(`${url}/getProject/0d84b6ac/${code}`)
      .then((res) => res.json())
      .then((res) => res.project);

    return answers;
  } catch (error) {
    console.log(error);
  }
}

async function getDeal(prospectId) {
  try {
    const answers = await fetch(
      `${url2}?action=Briefcase&prospectId=${prospectId}`
    ).then((res) => res.json());

    return answers;
  } catch (error) {
    console.log(error);
  }
}

async function getPayments(code, prospectId) {
  try {
    const answers = await fetch(
      `${url}/getCustomerPayments/0d84b6ac/${code}/${prospectId}`
    )
      .then((res) => res.json())
      .then((res) => res.recordsArray);

    return answers;
  } catch (error) {
    console.log(error);
  }
}

async function getScheduledPays(code, prospectId) {
  try {
    const answers = await fetch(
      `${url}/getCustomerScheduledPayments/0d84b6ac/${code}/${prospectId}`
    )
      .then((res) => res.json())
      .then((res) => res.recordsArray);

    return answers;
  } catch (error) {
    console.log(error);
  }
}

async function getCustomerDetail(code, prospectId) {
  try {
    const answers = await fetch(
      `${url}/getCustomerDetail/0d84b6ac/${code}/${prospectId}`
    )
      .then((res) => res.json())
      .then((res) => res.prospects);

    return answers;
  } catch (error) {
    console.log(error);
  }
}

async function getProspectsByCustomer(customerId) {
  try {
    const answers = await fetch(
      `${url}/getProspectsByCustomer/0d84b6ac/${customerId}`
    )
      .then((res) => res.json())
      .then((res) => res.prospects);

    return answers;
  } catch (error) {
    console.error(error);
  }
}

export default {
  getDeal,
  getCustomerDetail,
  getProject,
  getPayments,
  getProspectsByCustomer,
  getScheduledPays,
};
