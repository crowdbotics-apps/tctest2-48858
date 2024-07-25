import axios from "axios"
const tctestAPI = axios.create({
  baseURL: "https://tctest2-48858.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_hvdgd_list(payload) {
  return tctestAPI.get(`/api/v1/hvdgd/`)
}
function api_v1_hvdgd_create(payload) {
  return tctestAPI.post(`/api/v1/hvdgd/`, payload)
}
function api_v1_login_create(payload) {
  return tctestAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return tctestAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return tctestAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return tctestAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return tctestAPI.patch(`/rest-auth/user/`, payload)
}
function api_docs_schema_retrieve(payload) {
  return tctestAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function rest_auth_login_create(payload) {
  return tctestAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return tctestAPI.post(`/rest-auth/logout/`)
}
function api_v1_hvdgd_retrieve(payload) {
  return tctestAPI.get(`/api/v1/hvdgd/${payload.id}/`)
}
function api_v1_hvdgd_update(payload) {
  return tctestAPI.put(`/api/v1/hvdgd/${payload.id}/`, payload)
}
function api_v1_hvdgd_partial_update(payload) {
  return tctestAPI.patch(`/api/v1/hvdgd/${payload.id}/`, payload)
}
function api_v1_hvdgd_destroy(payload) {
  return tctestAPI.delete(`/api/v1/hvdgd/${payload.id}/`)
}
function rest_auth_registration_create(payload) {
  return tctestAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return tctestAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_change_create(payload) {
  return tctestAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return tctestAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return tctestAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return tctestAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
export const apiService = {
  api_v1_hvdgd_list,
  api_v1_hvdgd_create,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  rest_auth_logout_create,
  api_v1_hvdgd_retrieve,
  api_v1_hvdgd_update,
  api_v1_hvdgd_partial_update,
  api_v1_hvdgd_destroy,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create
}
