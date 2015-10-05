class PagesController < ApplicationController
	def strona_glowna
	end

	def portfolio
	end

	def oferta
	end

	def referencje
	end

	def kontakt
		@contact = Contact.new
	end

	def create
		@contact = Contact.new(params[:contact])
   		@contact.request = request
    	if @contact.deliver
      		flash.now[:notice] = "Dziękuję za wiadomość. Wkrótce się z Państwem skontaktuję."
    	else
      		flash.now[:error] = "Wygląda na to, że masz błąd w email. :( Spróbuj ponownie."
      	  # render :kontakt
    	end
	end
end
