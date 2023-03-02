import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: 'info@amasundayfarmersmarket.com',
      from: 'booking@amasundayfarmersmarket.com',
      subject: 'New Registration',
      text: `Name: ${req.body.firstName} ${req.body.lastName} || email: ${req.body.email} || Company: ${req.body.company} || Phone number: ${req.body.phone} || Address: ${req.body.address} `,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html lang="en">
    
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>AMA Sunday Farmers Market</title>
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
    
        <body>
    
            <div class="max-w-[25rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div class="relative">
    
                    <div class="flex flex-col border rounded-xl p-4 sm:p-6">
                        <h2 class="text-xl font-semibold text-gray-800">
                            Applicant Information
                        </h2>
                        <div class="mt-4 ">
                            <p class="py-3">Name: ${req.body.firstName} ${req.body.lastName}</p>
                            <p>Email: ${req.body.email}</p>
                            <p class="py-3">Company: ${req.body.company}</p>
                            <p>Phone number: ${req.body.phone}</p>
                            <p class="py-3">Address: ${req.body.address}</p>
                        </div>
    
                    </div>
    
                </div>
            </div>
    
        </body>
    
    </html>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
