class WelcomeController < ApplicationController
	def home
	end
	def videos
	end
	def lesson
	end
	def mp
	end
	def contact
	end
	def sendemail
		
		message = ContactMe.new(params[:contact_me_form])
  		if message.deliver
			redirect_to contactme_path, :notice => 'Email has been sent.'
		else
    		redirect_to contactme_path, :notice => 'Email could not be sent.'
		end
	end
end
