import { useState } from "react";
import { Button } from "../components/ui/button";
import TextArea from "../components/TextArea";
import TextField from "../components/TextField";
import { AppointmentInputs, sendAppointmentEmail } from "../api/email";

const Appointment: React.FC = () => {
  const [formValues, setFormValues] = useState<AppointmentInputs>({
    firstname: "",
    lastname: "",
    businessName: "",
    email: "",
    message: "",
  });

  const isContactEmailSent =
    localStorage.getItem("isContactEmailSent") === "true";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendAppointmentEmail(formValues);
    localStorage.setItem("isContactEmailSent", "true");
    window.location.reload();
  };

  return (
    <div className="flex gap-20 justify-center px-[5%] md:px-[15%] lg:px-[20%]">
      {!isContactEmailSent ? (
        <>
          <div className="flex flex-col self-center gap-4">
            <h1 className="text-7xl font-bold text-center xl:text-left">
              Formulaire de{" "}
              <span className="font-bold to-blue-700 text-blue-700 ">
                contact
              </span>
            </h1>
            <p className="text-center xl:text-left">
              Prêt à donner vie à votre vision en ligne ? Remplissez le
              formulaire ci-dessous et laissez-nous vous montrer comment nous
              pouvons créer un site web sur mesure pour votre entreprise.
              Ensemble, faisons de votre présence en ligne un moteur de succès.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 py-8 max-w-full"
              method="POST"
            >
              <div className="flex gap-4">
                <TextField
                  label="Prénom"
                  value={formValues.firstname}
                  onChange={(e) =>
                    setFormValues((prev) => ({
                      ...prev,
                      firstname: e.target.value,
                    }))
                  }
                  required
                />
                <TextField
                  label="Nom"
                  value={formValues.lastname}
                  onChange={(e) =>
                    setFormValues((prev) => ({
                      ...prev,
                      lastname: e.target.value,
                    }))
                  }
                  required
                />
              </div>

              <TextField
                label="Email"
                type="email"
                value={formValues.email}
                onChange={(e) =>
                  setFormValues((prev) => ({ ...prev, email: e.target.value }))
                }
                required
              />
              <TextField
                label="Nom de l'entreprise"
                value={formValues.businessName}
                onChange={(e) =>
                  setFormValues((prev) => ({
                    ...prev,
                    businessName: e.target.value,
                  }))
                }
                required
              />

              <TextArea
                label="Message"
                value={formValues.message}
                onChange={(e) =>
                  setFormValues((prev) => ({
                    ...prev,
                    message: e.target.value,
                  }))
                }
              />

              <Button buttonType="bordered" type="submit">
                Envoyer
              </Button>
            </form>
          </div>
          <img
            className="hidden xl:block w-[50%]"
            src="contact.svg"
            alt="contact"
          />
        </>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-7xl font-bold text-center "> Merci ! </h1>
          <p className="text-center">
            Nous vous remercions de nous avoir contacter. Nous vous
            recontacterons rapidement pour concrétiser votre projet.
          </p>
          <img className="pt-8" src="wait.svg" alt="Attente" />
        </div>
      )}
    </div>
  );
};

export default Appointment;
