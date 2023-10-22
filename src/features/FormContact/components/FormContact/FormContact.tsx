import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import { useFormikContact } from "../../hooks";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import { useTranslation } from "next-i18next";
import { AlertsSnackbarForm, useAlertSnackStore } from "@/src/features/alerts";

export const FormContact = () => {
  const { isLoading } = useAlertSnackStore();
  const { formik } = useFormikContact();
  const { t } = useTranslation();
  return (
    <Container component="main">
      <p className="font-bold text-2xl text-center">{t("FORM.CONTACT_ME")}</p>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="form"
          noValidate
          onSubmit={formik.handleSubmit}
          sx={{ mt: 2 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="fullName"
                variant="filled"
                color="secondary"
                required
                fullWidth
                id="fullName"
                label={t("FORM.LABELS.NAME")}
                InputProps={{
                  endAdornment: (
                    <>
                      {formik.touched.fullName &&
                      Boolean(formik.errors.fullName) ? (
                        <CancelIcon color="error" />
                      ) : (
                        formik.touched.fullName && (
                          <CheckCircleOutlineIcon color="secondary" />
                        )
                      )}
                    </>
                  ),
                }}
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.fullName && Boolean(formik.errors.fullName)
                }
                helperText={formik.touched.fullName && formik.errors.fullName}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="email"
                label={t("FORM.LABELS.EMAIL")}
                name="email"
                autoComplete="email"
                color="secondary"
                variant="filled"
                required
                InputProps={{
                  endAdornment: (
                    <>
                      {formik.touched.email && Boolean(formik.errors.email) ? (
                        <CancelIcon color="error" />
                      ) : (
                        formik.touched.email && (
                          <CheckCircleOutlineIcon color="secondary" />
                        )
                      )}
                    </>
                  ),
                }}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="subject"
                fullWidth
                id="subject"
                label={t("FORM.LABELS.SUBJECT")}
                color="secondary"
                variant="filled"
                required
                InputProps={{
                  endAdornment: (
                    <>
                      {formik.touched.subject &&
                      Boolean(formik.errors.subject) ? (
                        <CancelIcon color="error" />
                      ) : (
                        formik.touched.subject && (
                          <CheckCircleOutlineIcon color="secondary" />
                        )
                      )}
                    </>
                  ),
                }}
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.subject && Boolean(formik.errors.subject)}
                helperText={formik.touched.subject && formik.errors.subject}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                name="message"
                label={t("FORM.LABELS.MESSAGE")}
                type="text"
                id="message"
                autoComplete="get-message"
                multiline
                color="secondary"
                variant="filled"
                rows={6}
                required
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />
            </Grid>
          </Grid>
          <Box sx={{ m: 1, position: "relative" }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                textTransform: "capitalize",
                color: "white",
                fontWeight: 700,
              }}
              disabled={isLoading}
              color="secondary"
            >
              {t("FORM.BUTTON")}
            </Button>
            {isLoading && (
              <CircularProgress
                size={24}
                color="secondary"
                sx={{
                  position: "absolute",
                  top: "55%",
                  left: "50%",
                  marginTop: "-12px",
                  marginLeft: "-12px",
                }}
              />
            )}
          </Box>
        </Box>
      </Box>
      <AlertsSnackbarForm />
    </Container>
  );
};
