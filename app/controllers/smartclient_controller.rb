require 'RPCManager'

class SmartclientController < ApplicationController         
    def index
      
    end
    
    def data 
      # set the request parameters
      rpc = RPCManager.new(params, Supplyitem)      
      @result = rpc.processRequest 
      render json: @result
    end   
end
 