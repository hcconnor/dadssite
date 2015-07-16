class ContactMe < MailForm::Base
  attribute :name,          :validate => true
  attribute :email,         :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message_body,  :validate => true

  def headers
    {
      :subject => "[MESSAGE FROM WEBSITE FROM #{name}]",
      :to => "hamiltoncconnor@gmail.com",
      :from => %("#{name}" <#{email}>)
    }
  end
end