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
		@message = ContactMe.new
	end
	def sendemail
		
		@message = ContactMe.new(params[:contact_me])
  		if @message.deliver
			redirect_to contactme_path, :notice => 'Email has been sent.'
		else
    		render "contact"
		end
	end
end
