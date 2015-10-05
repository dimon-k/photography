class Contact < MailForm::Base
  attribute :name,      :validate => true
  attribute :email,     :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message
  attribute :nickname,  :captcha  => true

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
      :subject => "Photography: #{name}",
      :to => "dmitriy.kanunnikov@gmail.com",
      :from => "#{name} #{email}",
      :reply_to => "#{name} #{email}"
    }
  end
end