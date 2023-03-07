# Devops and Site Reliability

Hello students, and welcome to the DevOps and Site Reliability Engineering project. In this part of the project, you
will have the
opportunity to learn and apply the principles of DevOps and Site Reliability Engineering. These practices are essential
for ensuring that websites run smoothly and are always available to users.

You will be responsible for completing a series of tasks that focus on developing and testing your website, measuring
its performance, and creating documentation to ensure that the website is easy to deploy and maintain. You will also
have to create a PowerPoint presentation to report on your testing results.

To complete this project successfully, you must carefully follow the instructions and pay close attention to the
performance metrics. By monitoring these metrics, you can identify issues and bottlenecks in the system and make
informed decisions to improve the overall performance, reliability, and availability of your website.

Remember, this project is an excellent opportunity for you to learn and practice DevOps and Site Reliability
Engineering. So, take it seriously, work hard, and have fun! Good luck, and I look forward to seeing your final results.

## Devops Testing Report Requirements - Create a PowerPoint with Slides to Report on the Following

1. Develop and perform testing with automated tests that can be used to measure site performance in the browser using
   Playwright
    - Add a slide to your presentation to describe each automated test you create
    - You must write Playwright tests to check every requirement identified in your analysis and should have around
      40-50 tests
    - Use the Recorder and ChatGPT to help you write tests
    - Research how to make Playwright tests
    - Identify statistics you want to record related to the performance of running Playwright tests
    - Record statistics at the start of the project and research how to reduce them and propose solutions to implement
      in the next sprint
    - Research how to set up the GitHub action for Playwright reporting to share the recorded videos and screenshots of
      tests
2. Measure Webpack build times, build size, and research ways to improve them and implement measurable improvements
3. Measure automated test run times and research ways to improve them and implement measurable improvements
4. Measure deployment run times and research ways to improve them and implement measurable improvements
5. Link to your project DevOps documentation: developer docs and deployment docs

## DevOps Tasks - Documentation to Add To Your Project's ReadMe

1. Create easy-to-understand and reliable instructions for installing the project on the developer's Mac or Windows
   computer and add a link to them to your readme.md file.
2. Create easy-to-understand instructions and scripts to deploy the project and, if necessary, how to set up the
   development server and add a link to them to your readme.md file.
3. Add a link to your project's readme with a link to a deployment that all members of your team can see to view the
   progress of the sprint.

It is essential to complete these tasks carefully and pay close attention to the performance metrics. By monitoring
these performance metrics, you can identify issues and bottlenecks in the system and make informed decisions to improve
the overall performance, reliability, and availability of the website. Good luck with your project!

## Submission Instructions

1. Upload the report to canvas and host your videos on YouTube, so the file's are not too big and embed them in the
   PowerPoint

# Grading Rubric

| Criteria                   | Excellent (4) | Good (3) | Fair (2) | Poor (1)|
|----------------------------| --- | --- | --- | ---|
| Understanding of problem   | Demonstrates deep understanding of the problem and all of its relevant aspects, and identifies multiple viable solutions | Demonstrates good understanding of the problem and most of its relevant aspects, and identifies one or more viable solutions | Demonstrates partial understanding of the problem and some of its relevant aspects, and identifies one viable solution | Demonstrates limited understanding of the problem and its relevant aspects, and fails to identify viable solutions|
| Quality of solution        | Solution is innovative, creative, effective, and efficiently addresses all aspects of the problem | Solution is effective and addresses most aspects of the problem, but lacks creativity or innovation | Solution is somewhat effective, but fails to address some aspects of the problem, or has significant weaknesses in design or execution | Solution is ineffective or poorly designed, and fails to address the problem
| Presentation of solution   | Solution is presented in a clear, concise, and engaging manner, with strong visual aids and effective communication of key points | Solution is presented in a clear and concise manner, but may lack engagement or effective visual aids | Solution is presented in a somewhat disorganized or unclear manner, with weak visual aids or ineffective communication of key points | Solution is presented in a confusing or unclear manner, with poor visual aids and weak communication of key points|
| Implementation of solution | Solution is fully implemented and thoroughly tested, with strong evidence of success and documentation of the implementation process | Solution is mostly implemented and tested, with some evidence of success and some documentation of the implementation process | Solution is partially implemented and tested, with limited evidence of success and minimal documentation of the implementation process | Solution is not implemented or tested, with no evidence of success or documentation of the implementation process|
| Teamwork                   | Demonstrates excellent teamwork, with effective communication, strong collaboration, and a positive attitude towards team members | Demonstrates good teamwork, with adequate communication, collaboration, and a generally positive attitude towards team members | Demonstrates some teamwork, but with ineffective communication, limited collaboration, or a negative attitude towards team members | Demonstrates poor teamwork, with little or no communication, collaboration, or positive attitude towards team members|
Total Points __ out of Possible 20 Points

# Devops Content Begins Below

Total Points __ out of Possible 25 Points

## Introduction to Project Requirements spoken by MyWebClass.org CEO

As the CEO of MyWebClass.org, I cannot stress enough the importance of DevOps and Site Reliability Engineering. These
practices are crucial for ensuring that our website runs smoothly and is always available to our users. So, let me
explain what DevOps and Site Reliability Engineering are all about.

DevOps is a set of practices that combines software development and IT operations. It focuses on improving collaboration
and communication between development teams and operations teams to streamline the software delivery process. Site
Reliability Engineering, on the other hand, is a discipline that applies software engineering principles to the
maintenance and operation of large-scale websites. It aims to ensure that our website is always available, performant,
and reliable.

Now, let's talk about some specific tasks that are essential for DevOps and Site Reliability Engineering. First and
foremost, it is crucial to develop and perform testing with automated tests that can measure site performance in the
browser using Playwright. This helps us identify any performance issues and ensure that our website is running
optimally. Typical performance metrics that DevOps and Site Reliability Engineers might want to know about this task
include time to load pages, number of requests made, response time, memory usage, and CPU usage.

Secondly, we need to set up a deployment that all members of our team can see to view the progress of the sprint. This
allows us to monitor the progress of our work and ensure that everyone is on the same page. Typical performance metrics
that DevOps and Site Reliability Engineers might want to know about this task include deployment frequency, mean time to
deploy, time to recover from deployment failures, and deployment success rate.

Thirdly, we need to measure deployment times and research ways to improve them. We also need to measure automated test
times and research ways to improve them. By doing this, we can identify bottlenecks in our process and make measurable
improvements to our workflows. Typical performance metrics that DevOps and Site Reliability Engineers might want to know
about these tasks include time to deploy, time to rollback, success rate of deployments, percentage of failed
deployments, time to run automated tests, number of tests passing and failing, average response time for each test, and
the success rate of automated tests.

Fourthly, we need to create easy-to-understand and reliable instructions for installing the project on the developer's
Mac or Windows computer. This ensures that everyone on the team can easily set up their environment and get started with
the project. Typical performance metrics that DevOps and Site Reliability Engineers might want to know about this task
include time to install the project, percentage of successful installations, number of support tickets, and the time
taken to resolve support tickets.

Lastly, we need to create easy-to-understand instructions and scripts to deploy the project and, if necessary, how to
set up the development server. This ensures that we can deploy our website quickly and reliably. Typical performance
metrics that DevOps and Site Reliability Engineers might want to know about this task include time to deploy, success
rate of deployments, number of failed deployments, time to resolve failed deployments, and the number of support tickets
related to deployment and server setup.

By monitoring these performance metrics, DevOps and Site Reliability Engineers can identify issues and bottlenecks in
the system and make informed decisions to improve the overall performance, reliability, and availability of the website.
So, I urge you to take these tasks seriously and pay close attention to the performance metrics. Good luck with your
project!

