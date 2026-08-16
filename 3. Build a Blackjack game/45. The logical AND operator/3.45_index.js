let hasCompletedCourse = false
let givesCertificate = true

// Nested if statement to satisfy both conditons
if (hasCompletedCourse === true) {
    if (givesCertificate === true) {
        generateCertificate()
    }
}

// Same as the following:
if (hasCompletedCourse && givesCertificate) {
    generateCertificate()
}

function generateCertificate() {
    console.log("Generating certificate....")
}


