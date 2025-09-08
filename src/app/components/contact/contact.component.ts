import { Component, type OnInit } from "@angular/core"

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

@Component({
  selector: "app-contact",
  standalone: false,
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  formData: ContactForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
  }

  isSubmitting = false
  showSuccessMessage = false

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.isSubmitting) return

    this.isSubmitting = true

    setTimeout(() => {
      console.log("Form submitted:", this.formData)
      this.isSubmitting = false
      this.showSuccessMessage = true


      this.formData = {
        name: "",
        email: "",
        subject: "",
        message: "",
      }

      setTimeout(() => {
        this.showSuccessMessage = false
      }, 5000)
    }, 2000)
  }
}
